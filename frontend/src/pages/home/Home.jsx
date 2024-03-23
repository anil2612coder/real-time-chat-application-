import MessageContainer from "../../components/messages/MessageContainer";
import Sidebar from "../../components/sidebar/Sidebar";
import { useAuthContext } from "../../context/AuthContext";

const Home = () => {
  const { authUser } = useAuthContext();
  return (
    <div>
      <div className="flex items-center  justify-center w-full h-full">
        <div className="px-4 pb-2 text-center sm:text-lg md:text-2xl text-blue-400 font-semibold  border-b border-slate-500 items-center gap-2">
          <p>
            {" "}
            👋 <span className="text-white">Welcome </span> {authUser.fullName}{" "}
            😎
          </p>
        </div>
      </div>
      <div className="flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <Sidebar />
        <MessageContainer />
      </div>
    </div>
  );
};
export default Home;
