# Firefox Config

## Recommendations
* [uBlock Origin](https://github.com/gorhill/uBlock) - For blocking ads, trackers, coin miners, popups, annoying anti-blockers, malware sites, etc.

* [Arkenfox](https://github.com/arkenfox/user.js) - A comprehensive user.js template for configuration and hardening.

* DNS Provider - [Mullvad](https://mullvad.net/en/help/dns-over-https-and-dns-over-tls), [Quad9](https://quad9.net/service/service-addresses-and-features/#rec) or [NextDNS](https://nextdns.io/).

* VPN - [Mullvad](https://mullvad.net), [ProtonVPN](https://protonvpn.com/) or [iVPN](https://www.ivpn.net/).

## Arkenfox

### Download Arkenfox
[Arkenfox Download](https://github.com/arkenfox/user.js/archive/refs/heads/master.zip)

### Create New Firefox Profile and Install Arkenfox

1. Go to `about:profiles`

2. Create a New Profile.

3. Go to the folder path listed under `Root Directory` in `about:profiles`.

4. Copy over `prefsCleaner.sh`, `prefsCleaner.bat`, `updater.sh`, `updater.bat` and `user.js` files to your newly created profiles root directory.

5. Run the updater.

6. Run the prefsCleaner.

7. Open Firefox.

8. Close Firefox.

9. Install [user-overrides.js](user-overrides.js) in the same folder.

10. Run the updater again.

11. Run the prefsCleaner again.

12. Done.