import React from "react";

const Button = ({
  children,
  disabled,
}: {
  children: React.ReactNode;
  disabled: boolean;
}) => {
  return (
    <button
      className={`py-1.5 px-2.5 m-2 font-bold rounded-3xl border-2 text-white 
            ${disabled ? "bg-customPrimaryDefault/75" : "bg-customPrimaryDefault hover:bg-customPrimaryDark"}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
