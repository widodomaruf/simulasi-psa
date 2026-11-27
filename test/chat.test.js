// Tes untuk api/chat.js. Jalankan: npm test (dari folder repo).
import { test } from "node:test";
import assert from "node:assert/strict";
import handler, { ASAL_DIIZINKAN } from "../api/chat.js";

const diizinkan = (asal) => ASAL_DIIZINKAN.some((rx) => rx.test(asal));

test("asal situs LEGA diizinkan", () => {
  for (const asal of [
    "https://legapsa.widodomaruf.my.id",
    "https://legapsa.vercel.app",
    "https://simulasi-psa.vercel.app",
    "https://simulasi-psa-git-main-mwidodom.vercel.app",
    "https://simulasi-nun2pu3oi-mwidodom-9684s-projects.vercel.app",
  ]) assert.ok(diizinkan(asal), asal);
});

test("asal lain ditolak", () => {
  for (const asal of [
    "https://evil.com",
    "https://legapsa.widodomaruf.my.id.evil.com",
    "http://legapsa.widodomaruf.my.id",
    "https://simulasi-psa.vercel.app.evil.com",
  ]) assert.ok(!diizinkan(asal), asal);
});

// Mock respons Vercel: cukup setHeader, status, dan json.
function mockRes() {
  const r = { code: 200, body: null, headers: {} };
  r.setHeader = (k, v) => { r.headers[k] = v; };
  r.status = (c) => { r.code = c; return r; };
  r.json = (b) => { r.body = b; return r; };
  return r;
}

test("GET ditolak 405", async () => {
  const res = mockRes();
  await handler({ method: "GET", headers: {} }, res);
  assert.equal(res.code, 405);
});

test("POST dari asal asing ditolak 403", async () => {
  const res = mockRes();
  await handler({ method: "POST", headers: { origin: "https://evil.com" }, body: {} }, res);
  assert.equal(res.code, 403);
});
