import { Helmet } from "react-helmet";
import useAuth from "../../../hooks/useAuth";

const UserHome = () => {
    const { user } = useAuth();
    return (
        <div>
            <Helmet className="w-full">
                <title>Bistro | User Dashboard</title>
            </Helmet>
            <h3 className="text-center m-6 text-3xl">Hello, <span className="text-orange-600">{user.displayName}</span> Welcome to your Dashboard</h3>
            <div className="text-center">
                <button className="btn btn-warning m-2">Update Information</button>
                <button className="btn btn-error m-2">Delete Account</button>
            </div>
            <div className="ml-8">
                <h2>Name: {user.displayName}</h2>
                <h2>Email: {user.email}</h2>
            </div>
        </div>
    );
};

export default UserHome;