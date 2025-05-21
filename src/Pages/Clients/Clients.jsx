import brand1 from './../../assets/BrandIcons/brandIcon1.png';
import brand2 from './../../assets/BrandIcons/brandIcon2.png';
import brand3 from './../../assets/BrandIcons/brandIcon3.png';
import brand4 from './../../assets/BrandIcons/brandIcon4.png';
import brand5 from './../../assets/BrandIcons/brandIcon5.png';
import brand6 from './../../assets/BrandIcons/brandIcon6.png';
import brand7 from './../../assets/BrandIcons/brandIcon7.png';
import brand8 from './../../assets/BrandIcons/brandIcon8.png';
import brand9 from './../../assets/BrandIcons/brandIcon9.png';
import brand10 from './../../assets/BrandIcons/brandIcon10.png';
import brand11 from './../../assets/BrandIcons/brandIcon11.png';
import brand12 from './../../assets/BrandIcons/brandIcon12.png';
import brand13 from './../../assets/BrandIcons/brandIcon13.png';
import brand14 from './../../assets/BrandIcons/brandIcon14.png';
import brand15 from './../../assets/BrandIcons/brandIcon15.png';
import brand16 from './../../assets/BrandIcons/brandIcon16.png';
import brand17 from './../../assets/BrandIcons/brandIcon17.png';
import brand18 from './../../assets/BrandIcons/brandIcon18.png';
import brand19 from './../../assets/BrandIcons/brandIcon19.png';
import brand20 from './../../assets/BrandIcons/brandIcon20.png';
import brand21 from './../../assets/BrandIcons/brandIcon21.png';
import brand22 from './../../assets/BrandIcons/brandIcon22.png';
import brand23 from './../../assets/BrandIcons/brandIcon23.png';
import brand24 from './../../assets/BrandIcons/brandIcon24.png';
import brand25 from './../../assets/BrandIcons/brandIcon25.png';
import brand26 from './../../assets/BrandIcons/brandIcon26.png';
import { FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const ClientsPage = () => {
    const brands = [
        brand1, brand2, brand3, brand4, brand5, brand6, brand7, brand8, brand9,
        brand10, brand11, brand12, brand13, brand14, brand15, brand16, brand17,
        brand18, brand19, brand20, brand21, brand22, brand23, brand24, brand25, brand26
    ];

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-600 dark:to-gray-800 py-20 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
                        Our <span className="text-blue-500">Valued Clients</span>
                    </h1>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-6"></div>
                    <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                        Trusted by leading brands and organizations across multiple industries
                    </p>
                </div>

                <div className="container mx-auto px-2 sm:px-4 md:px-6 lg:px-8">
                    <div className="bg-transparent rounded grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-9 gap-x-1 gap-y-2 place-items-center">
                        {brands.map((brand, index) => (
                            <div
                                key={index}
                                className="aspect-square w-full max-w-[90px]  overflow-hidden flex items-center justify-center p-3 hover:shadow-xl hover:scale-150 hover:bg-gray-300 dark:hover:bg-slate-600 hover:rounded-lg transition-all duration-300"
                            >
                                <img
                                    src={brand}
                                    alt={`Brand ${index + 1}`}
                                    className="w-full h-full object-contain"
                                    loading="lazy"
                                    onError={(e) => {
                                        e.currentTarget.src = '/fallback-brand.png';
                                        e.currentTarget.className = 'w-full h-full object-cover p-3 opacity-70';
                                    }}
                                />
                            </div>
                        ))}
                    </div>
                </div>

                <div className="text-center mt-20">
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
                        Ready to join our esteemed clientele?
                    </h3>
                    <Link to="/contact">
                        <button className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-semibold hover:shadow-lg transition-all">
                            Start Your Project
                            <FiArrowRight className="ml-2" />
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};
export default ClientsPage;