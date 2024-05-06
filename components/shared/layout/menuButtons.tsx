// import Image from 'next/image';

type Props = {
  className?: string;
  active?: boolean;
  handleToggleNav: () => void;
};

const MenuButton = ({ className, active, handleToggleNav }: Props) => {
  return (
    <div
      className={`relative flex h-10 w-10  cursor-pointer flex-col items-start justify-center overflow-hidden p-2 ${className}`}
      onClick={handleToggleNav}
    >
      {/* <span
        className={`absolute h-[.13rem] transform bg-[#0283B4CC] transition-all duration-500 ${
          active ? 'top-1/2 w-6  rotate-45' : 'top-2 w-8'
        }`}
      />
      <span
        className={`absolute h-[.13rem] w-8 transform bg-[#0283B4CC] transition-all ${
          active ? 'translate-x-12' : ''
        } `}
      />
      <span
        className={`absolute bottom-2  h-[.13rem] transform bg-[#0283B4CC] transition-all duration-500 ${
          active ? 'top-1/2 w-6 -rotate-45' : 'w-8'
        }`}
      /> */}

      <img
        src='/svg/menu.svg'
        alt='menu'
        width={30}
        height={30}
        className='h-[1.5rem] w-[1.5rem]'
      />
    </div>
  );
};

export default MenuButton;
