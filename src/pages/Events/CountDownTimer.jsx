import CountDownTimer from "react-realtime-countdown-timer";

export default function () {
  const { days, hours, minutes, seconds, nanoSeconds, status, message } =
    CountDownTimer(
      /** @param Staring time Parameter--- */
      "Wed Nov 24 2023 23:00:00 GMT+0600 (Bangladesh Standard Time)",

      /** @param Ending time Parameter--- */
      "Wed Dec 31 2023 18:00:00 GMT+0600 (Bangladesh Standard Time)",

      /** @param Time inter validation Duration--- */
      1000
    );
  return (
    <div className="-mt-4 sm:-mt-4 md:-mt-0 lg:-mt-0 text-white text-xl sm:text-xl md:text-2xl lg:text-xl">
      <br />
      <span className="text-2xl sm:text-2xl md:text-4xl lg:text-3xl font-semibold">
        {days}
      </span>
      D
      <span className="text-2xl sm:text-2xl md:text-4xl lg:text-3xl mx-3">
        :
      </span>
      <span className="text-2xl sm:text-2xl md:text-4xl lg:text-3xl font-semibold">
        {hours}
      </span>
      H
      <span className="text-2xl sm:text-2xl md:text-4xl lg:text-3xl mx-3">
        :
      </span>
      <span className="text-2xl sm:text-2xl md:text-4xl lg:text-3xl font-semibold">
        {minutes}
      </span>
      M
      <span className="text-2xl sm:text-2xl md:text-4xl lg:text-3xl mx-3">
        :
      </span>
      <span className="text-2xl sm:text-2xl md:text-4xl lg:text-3xl font-semibold">
        {seconds}
      </span>
      S
    </div>
  );
}
