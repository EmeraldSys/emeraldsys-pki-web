/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  rewrites: async() => {
    return [
      {
        source: "/auth",
        destination: "https://auth.pki.emeraldsys.xyz"
      }
    ];
  }
}
