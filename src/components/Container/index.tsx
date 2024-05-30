import classnames from "classnames";
import Image from "next/image";

// Assets
import MoneybagIcon from "@/assets/icons/money_bag.svg";
import ContactsIcon from "@/assets/icons/contacts.svg";
import JoystickIcon from "@/assets/icons/joystick.svg";
import BannerImage from "@/assets/images/banner.png";
import UploadIcon from "@/assets/icons/upload.svg";
import ArrowUpIcon from "@/assets/icons/arrow_up.svg";
import SpotifyIcon from "@/assets/icons/spotify.svg";
import DroneIcon from "@/assets/icons/drone.svg";
import HeartIcon from "@/assets/icons/heart.svg";
import EyeIcon from "@/assets/icons/eye.svg";

// Styles
import styles from "./index.module.scss";

export default function Container() {
  return (
    <div className="flex-1 flex flex-col p-5 h-screen overflow-hidden">
      <div
        className={classnames(
          "rounded-2xl bg-cream-darker pb-10",
          styles.roundedCard
        )}
      >
        <div className="flex justify-between">
          <div>
            <div className="flex items-center">
              <p className="mr-2 text-title">By Spotify</p>
              <SpotifyIcon />
              <div
                className={classnames(
                  "items-center border rounded-full px-3 py-2 flex",
                  styles.info
                )}
              >
                <EyeIcon />
                <p className="ml-2 mr-5 text-subtitle">60K</p>
                <ContactsIcon />
                <p className="ml-2 text-subtitle">584</p>
              </div>
              <div
                className={classnames(
                  "items-center border rounded-full px-3 py-2 flex",
                  styles.info_secondary
                )}
              >
                <HeartIcon />
                <p className="ml-2 text-subtitle">74</p>
              </div>
            </div>
            <p className="mt-6 text-big">
              Spotify Million Playlist
              <br />
              Dataset Challenge
            </p>
            <p className="text-body-2 mt-5 mb-9">
              A dataset and open-ended challenge for music recommendation
              research
            </p>
            <div className="flex">
              <button
                className={classnames(
                  "rounded-full w-80 bg-black text-body-2-medium",
                  styles.participate
                )}
              >
                🔒 Participate
              </button>
              <button
                className={classnames(
                  "rounded-full p-4 bg-black text-white ml-3",
                  styles.uploadBtn
                )}
              >
                <UploadIcon />
              </button>
            </div>
          </div>
          <div className={styles.rightSection}>
            <div className="mb-9 flex items-center">
              <div
                className={classnames(
                  "rounded-full bg-cream-darker2 flex justify-center items-center",
                  styles.icon
                )}
              >
                <MoneybagIcon />
              </div>
              <div className="ml-5">
                <p className="mb-1 text-body-2">$50,000</p>
                <p className="text-body-2">Sent</p>
              </div>
            </div>
            <div className="mb-9 flex items-center">
              <div
                className={classnames(
                  "rounded-full bg-cream-darker2 flex justify-center items-center",
                  styles.icon
                )}
              >
                <JoystickIcon />
              </div>
              <div className="ml-5">
                <p className="text-body-2 mb-1">PS5</p>
                <p className="text-body-2">Giveaway</p>
              </div>
            </div>
            <div className="flex items-center">
              <div
                className={classnames(
                  "rounded-full bg-cream-darker2 flex justify-center items-center",
                  styles.icon
                )}
              >
                <DroneIcon />
              </div>
              <div className="ml-5">
                <p className="text-body-2 mb-1">5 DJI Mavic</p>
                <p className="text-body-2">Mini 2</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={classnames(
          "overflow-auto relative flex-1 mt-9 mx-auto",
          styles.feed
        )}
      >
        <p className="text-heading">Introduction</p>
        <p className="mt-3 mb-8 text-body-2-loose">
          The Spotify Million Playlist Dataset Challenge consists of a dataset
          and evaluation to enable research in music recommendations. It is a
          continuation of the RecSys Challenge 2018, which ran from January to
          July 2018. The dataset contains 1,000,000 playlists, including
          playlist titles and track titles, created by users on the Spotify
          platform between January 2010 and October 2017. The evaluation task is
          automatic playlist continuation: given a seed playlist title and/or
          initial set of tracks in a playlist, to predict the subsequent tracks
          in that playlist. This is an open-ended challenge intended to
          encourage research in music recommendations, and no prizes will be
          awarded (other than bragging rights).
        </p>
        <p className="mt-3 mb-8 text-body-2-loose">
          The Spotify Million Playlist Dataset Challenge consists of a dataset
          and evaluation to enable research in music recommendations. It is a
          continuation of the RecSys Challenge 2018, which ran from January to
          July 2018. The dataset contains 1,000,000 playlists, including
          playlist titles and track titles, created by users on the Spotify
          platform between January 2010 and October 2017. The evaluation task is
          automatic playlist continuation: given a seed playlist title and/or
          initial set of tracks in a playlist, to predict the subsequent tracks
          in that playlist. This is an open-ended challenge intended to
          encourage research in music recommendations, and no prizes will be
          awarded (other than bragging rights).
        </p>
        <Image src={BannerImage.src} width={452} height={198} alt="banner" />
        <div className={styles.space} />
        <div className={classnames("sticky", styles.sticky)}>
          <div
            className={classnames(
              "rounded-full overflow-hidden relative",
              styles.send
            )}
          >
            <input
              className={classnames(
                "text-body-light w-full focus:outline-none",
                styles.input
              )}
              placeholder="Ask me anything!"
            />
            <button
              className={classnames(
                "absolute top-2 right-2 rounded-full p-3 bg-black text-white ml-2",
                styles.sendBtn
              )}
            >
              <ArrowUpIcon />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
