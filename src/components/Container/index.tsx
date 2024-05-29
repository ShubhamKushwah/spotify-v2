import classnames from "classnames";

import Spotify from "@/assets/icons/spotify.svg";
import Eye from "@/assets/icons/eye.svg";
import ContactsIcon from "@/assets/icons/contacts.svg";
import Heart from "@/assets/icons/heart.svg";
import UploadIcon from "@/assets/icons/upload.svg";
import MoneybagIcon from "@/assets/icons/money_bag.svg";
import JoystickIcon from "@/assets/icons/joystick.svg";
import DroneIcon from "@/assets/icons/drone.svg";
import BannerImage from "@/assets/images/banner.png";
import ArrowUp from "@/assets/icons/arrow_up.svg";

import styles from "./index.module.scss";
import Image from "next/image";

export default function Container() {
  return (
    <div className="flex-1 flex flex-col p-5 h-screen overflow-auto">
      <div className="rounded-2xl bg-cream-darker p-11">
        <div className="flex justify-between">
          <div>
            <div className="flex items-center">
              <p className="mr-2">By Spotify</p>
              <Spotify />
              <div className="ml-4 items-center border border-red-600 rounded-full py-2 px-3 flex">
                <Eye />
                <p className="ml-1 mr-5">60K</p>
                <ContactsIcon />
                <p>584</p>
              </div>
              <div className="ml-2 items-center border border-red-600 rounded-full py-2 px-3 flex">
                <Heart />
                <p className="ml-1">74</p>
              </div>
            </div>
            <p className="mt-6">
              Spotify Million Playlist
              <br />
              Dataset Challenge
            </p>
            <p className="mt-5 mb-8">
              A dataset and open-ended challenge for music recommendation
              research
            </p>
            <div className="flex">
              <button className="rounded-full p-4 w-80 bg-black text-white">
                🔒 Participate
              </button>
              <button className="rounded-full p-4 bg-black text-white ml-2">
                <UploadIcon />
              </button>
            </div>
          </div>
          <div className="min-w-44">
            <div className="mb-9 flex items-center">
              <div className="w-12 h-12 rounded-full bg-cream-dark flex justify-center items-center">
                <MoneybagIcon />
              </div>
              <div className="ml-4">
                <p className="mb-1">$50,000</p>
                <p>Sent</p>
              </div>
            </div>
            <div className="mb-9 flex items-center">
              <div className="w-12 h-12 rounded-full bg-cream-dark flex justify-center items-center">
                <JoystickIcon />
              </div>
              <div className="ml-4">
                <p className="mb-1">PS5</p>
                <p>Giveaway</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-full bg-cream-dark flex justify-center items-center">
                <DroneIcon />
              </div>
              <div className="ml-4">
                <p className="mb-1">5 DJI Mavic</p>
                <p>Mini 2</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={classnames(
          "relative flex-1 mt-9 mx-auto overflow-auto",
          styles.feed
        )}
      >
        <p>Introduction</p>
        <p className="mt-2 mb-7">
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
        <p className="mt-2 mb-7">
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
        <p className="mt-2 mb-7">
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
        <Image
          src={BannerImage.src}
          width={200}
          height={200}
          layout="responsive"
          alt="banner"
        />
        <div className="sticky bottom-8 left-0">
          <div
            className={classnames(
              "rounded-full overflow-hidden relative",
              styles.send
            )}
          >
            <input
              className="w-full p-5 focus:outline-none"
              placeholder="Ask me anything!"
            />
            <button
              className={
                "absolute top-2 right-2 rounded-full p-3 bg-black text-white ml-2"
              }
            >
              <ArrowUp />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
