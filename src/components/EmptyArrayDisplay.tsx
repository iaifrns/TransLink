
const EmptyArrayDisplay = () => {
  return (
    <div className="flex flex-col gap-4 justify-center items-center w-full">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="150"
        height="150"
        viewBox="0 0 24 24"
      >
        <path
          fill="currentColor"
          fill-rule="evenodd"
          d="m9.592 8.277l-.898-1.384l3.46-2.247l.898 1.384zm-.485 2.282l-.899-1.384l-.898-1.384l-.9-1.383l1.385-.9l3.46-2.246l1.383-.899l.9 1.384l.898 1.384l.899 1.384l-1.384.899l-3.46 2.247zm4.47 4.063l1.697.865l-.1-1.903l-.188-3.61l-.1-1.902l-1.598 1.038l-3.032 1.968l-1.598 1.038l1.698.865zm-.1-1.903l-.09-1.707l-1.433.931zm4.258-.755h2.475v8.251h-2.475zm4.125-1.65v11.551h-5.775v-11.55zm-13.652.698l-3.76 10.922l-1.56-.537l3.76-10.922zm2.513 9.203a2.063 2.063 0 1 0 0-4.125a2.063 2.063 0 0 0 0 4.125m3.713-2.063a3.713 3.713 0 1 1-7.425 0a3.713 3.713 0 0 1 7.425 0"
          clip-rule="evenodd"
        />
      </svg>
      <p className="text-[32px] font-bold">Nothing found</p>
    </div>
  );
};

export default EmptyArrayDisplay;
