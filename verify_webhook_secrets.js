const crypto = require('crypto');

// import * as crypto from 'crypto';

// const signature = 'sha1=9ca66abefa1254df726385f07432ed60a648b853a0d71ea1c375865252dabf9d';

const signature256 = 'sha256=9ca66abefa1254df726385f07432ed60a648b853a0d71ea1c375865252dabf9d';

const secret = 'testtest';

let encoder = new TextEncoder();

main()
  .then(() => console.log('done'));
async function main() {
  const data = JSON.stringify({"test": "test"});
  // const data = 'seed';
  let verified = await verifySignature(secret, signature256, data);
  console.log({ verified });

  const sig = crypto
    .createHmac("sha256", secret)
    .update(data)
    .digest("hex");
    // .digest("base64");

  console.log({ sig })
  console.log({ signature256 })
  const trusted = Buffer.from(sig, 'ascii');

  let parts = signature256.split("=");
  let sigHex = parts[1];
  console.log({ sigHex })
  const untrusted = Buffer.from(sigHex, 'ascii');

  const a = crypto.timingSafeEqual(trusted, untrusted);

  console.log({ a });
}
async function verifySignature(secret, header, payload) {
  let parts = header.split("=");
  let sigHex = parts[1];

  let algorithm = { name: "HMAC", hash: { name: 'SHA-256' } };

  let keyBytes = encoder.encode(secret);
  let extractable = false;
  let key = await crypto.subtle.importKey(
    "raw",
    keyBytes,
    algorithm,
    extractable,
    [ "sign", "verify" ],
  );

  let sigBytes = hexToBytes(sigHex);
  let dataBytes = encoder.encode(payload);

  console.log({ sigBytes });
  console.log({ dataBytes });
  let equal = await crypto.subtle.verify(
    algorithm.name,
    key,
    sigBytes,
    dataBytes,
  );

  return equal;
}

function hexToBytes(hex) {
  let len = hex.length / 2;
  let bytes = new Uint8Array(len);

  let index = 0;
  for (let i = 0; i < hex.length; i += 2) {
    let c = hex.slice(i, i + 2);
    let b = parseInt(c, 16);
    bytes[index] = b;
    index += 1;
  }

  return bytes;
}