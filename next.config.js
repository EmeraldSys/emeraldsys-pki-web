/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  rewrites: async () => {
    return {
      beforeFiles: [
        {
          "source": "/:path*",
          "has": [
            {
              "type": "host",
              "value": "auth.pki.emeraldsys.xyz"
            }
          ],
          "destination": "/auth/:path*"
        }
      ]
    };
  }
}
