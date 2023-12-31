import classNames from "classnames";
interface props {
  handleOnClick: () => void;
  isPlaying: { value: boolean };
}
export default function ButtonPlayCarousel({
  handleOnClick,
  isPlaying,
}: props) {
  return (
    <button
      aria-label="Play button"
      onClick={handleOnClick}
      class={classNames("mr-4 text-currentColor pl-[2px]", {
        hidden: isPlaying.value,
      })}
    >
      <svg width="18" height="18" viewBox="0 0 100 100" fill="currentColor">
        <path
          d="M100 50C100.004 51.3058 99.608 52.5903 98.8513 53.7284C98.0946 54.8665 97.0027 55.8196 95.6818 56.4949L13.8182 98.8678C12.438 99.5829 10.8572 99.9733 9.23908 99.9987C7.62096 100.024 6.02417 99.6834 4.61364 99.0121C3.21653 98.3511 2.05271 97.3873 1.24184 96.2196C0.430974 95.0519 0.00233442 93.7225 0 92.3682V7.63184C0.00233442 6.27751 0.430974 4.94814 1.24184 3.78045C2.05271 2.61275 3.21653 1.64887 4.61364 0.987929C6.02417 0.31656 7.62096 -0.0240351 9.23908 0.00131891C10.8572 0.0266729 12.438 0.417057 13.8182 1.13215L95.6818 43.5051C97.0027 44.1804 98.0946 45.1335 98.8513 46.2716C99.608 47.4097 100.004 48.6942 100 50Z"
          fill="currentColor"
        />
      </svg>
    </button>
  );
}
