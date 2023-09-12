import CarNav from "./Nav/Nav";

export const Home = () => {
  return (
    <div className="h-screen">
      <CarNav />
      <img className="w-full h-full object-cover " src="car.png" alt="user" />
    </div>
  );
};
