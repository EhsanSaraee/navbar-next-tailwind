import Navbar from '../components/Navbar';

const Home = () => {
   return (
      <>
         <Navbar />
         <main className="text-center flex flex-col max-w-lg sm:max-w-xl md:max-w-2xl mx-auto">
            <h1 className="text-3xl md:text-4xl xl:text-5xl font-bold mb-6">
               This is a home page
            </h1>
            <h3 className="mb-4 text-2xl md:text-3xl xl:text-4xl font-semibold">
               Material-UI Navbar with Drawer
            </h3>
            <p className="text-md md:text-lg xl:text-xl tracking-tight">
               Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam
               obcaecati veniam enim, quasi voluptate quos atque provident amet
               voluptates ea quidem. Atque dignissimos dolorem veniam error
               distinctio molestiae quo quaerat eligendi totam quia perferendis,
               ut beatae ea rerum facilis praesentium repudiandae natus aut nemo
               iusto expedita mollitia consequuntur. Eius, doloribus?
            </p>
         </main>
      </>
   );
};

export default Home;
