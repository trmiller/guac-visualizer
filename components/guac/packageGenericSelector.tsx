import React from "react";
import Select from "react-select";

export type PackageSelectorOption<T> = {
  label: string;
  value: T;
};

const PackageGenericSelector = <T extends unknown>({
  label,
  options,
  onSelect,
  className = "", // Add a default value here to prevent errors when it's undefined
  ...rest
}: {
  label: string;
  options: PackageSelectorOption<T>[];
  onSelect: (value: T) => void;
  className?: string; // Allow className to be passed in as a prop
}) => {
  return (
    <div className="flex flex-col w-full lg:w-52 space-y-2 text-lg dark:text-black">
      {label && <div className="w-fit dark:text-white">{label}</div>}
      <Select
        options={options}
        onChange={(newValue: PackageSelectorOption<T>) => {
          onSelect(newValue.value);
        }}
        {...rest}
      />
    </div>
  );
};

export default PackageGenericSelector;
