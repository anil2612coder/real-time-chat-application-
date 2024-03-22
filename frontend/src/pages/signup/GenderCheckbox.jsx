const GenderCheckbox = ({ onChenckBoxChange, selectedGender }) => {
  return (
    <div className="flex mt-3">
      <div className="form-control">
        <label className={`label gap-2 cursor-pointer  `}>
          <span className="text-gray-300   font-medium">Male</span>
          <input
            type="checkbox"
            name="gender"
            className="w-5 h-5 border-1 border-gray-400 rounded-lg flex items-center justify-center"
            checked={selectedGender === "male"}
            onChange={() => onChenckBoxChange("male")}
          />
        </label>
      </div>
      <div className="form-control">
        <label className={`label  gap-2 cursor-pointer  `}>
          <span className="text-gray-300 ml-2 font-medium">Female</span>
          <input
            type="checkbox"
            name="gender"
            className="w-5 h-5 border-2 border-gray-400 rounded-lg flex items-center justify-center"
            checked={selectedGender === "female"}
            onChange={() => onChenckBoxChange("female")}
          />
        </label>
      </div>
    </div>
  );
};
export default GenderCheckbox;
