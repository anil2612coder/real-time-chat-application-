import useLogout from "../../hooks/useLogout";

const LogoutButton = () => {
  const { loading, logout } = useLogout();
  return (
    <div>
      {!loading ? (
        <button
          className="btn btn-block text-blue-600 btn-sm mt-2"
          onClick={logout}
        >
          Logout
        </button>
      ) : (
        <span className="loading loading-spinner"></span>
      )}
    </div>
  );
};
export default LogoutButton;
