import Conversations from "./Conversations";
import LogoutButton from "./LogoutButton";
import SearchInput from "./SearchInput";

const Sidebar = () => {
  return (
    <div className="border-r border-slate-500 mr-4 p-4 flex flex-col">
      <SearchInput />
      <div className="divider bg-white h-1"></div>
      <Conversations />
      <LogoutButton />
    </div>
  );
};
export default Sidebar;
