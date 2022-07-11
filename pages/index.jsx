import Navbar from '../components/Navbar';
import Posts from '../components/Posts';

const Home = () => {
   return (
      <>
         <Navbar />
         <main className="text-center xl:max-w-7xl lg:max-w-5xl sm:max-w-2xl md:max-w-3xl max-w-lg flex flex-col mx-auto">
            <h1 className="text-3xl md:text-4xl xl:text-5xl font-bold mb-6">
               Posts
            </h1>
            <Posts />
         </main>
      </>
   );
};

export default Home;
