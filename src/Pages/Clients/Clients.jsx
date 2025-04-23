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
import brand22 from './../../assets/BrandIcons/brandIcon22.png';
import brand23 from './../../assets/BrandIcons/brandIcon23.png';
import brand24 from './../../assets/BrandIcons/brandIcon24.png';
import brand25 from './../../assets/BrandIcons/brandIcon25.png';
import brand26 from './../../assets/BrandIcons/brandIcon26.png';
import { FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const ClientsPage = () => {
    const brandCategories = [
        {
            title: "Media & Broadcasting",
            brands: [brand1, brand2, brand3, brand4, brand5]
        },
        {
            title: "Technology Partners",
            brands: [brand6, brand7, brand8, brand9, brand10]
        },
        {
            title: "Consumer Brands",
            brands: [brand11, brand12, brand13, brand14, brand15]
        },
        {
            title: "Advertising Agencies",
            brands: [brand16, brand17, brand18, brand19, brand20]
        },
        {
            title: "Publishing & Education",
            brands: [brand22, brand23, brand24]
        },
        {
            title: "Entertainment",
            brands: [brand25, brand26]
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950 py-20 px-4">
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

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 lg:mx-32">
                    {brandCategories.map((category, index) => (
                        <div
                            key={index}
                            className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow duration-300"
                        >
                            <div className="flex items-center mb-6">
                                <span className="w-3 h-3 bg-blue-500 rounded-full mr-3 flex-shrink-0"></span>
                                <h2 className="text-xl font-bold text-gray-800 dark:text-white truncate">
                                    {category.title}
                                </h2>
                            </div>

                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                                {category.brands.map((brand, brandIndex) => (
                                    <div
                                        key={brandIndex}
                                        className="relative group aspect-square bg-gray-50 dark:bg-gray-700 rounded-md overflow-hidden transition-all duration-300 hover:scale-[1.02]"
                                    >
                                        <img
                                            src={brand}
                                            alt={`${category.title} brand ${brandIndex + 1}`}
                                            className="w-full h-full object-contain p-3"
                                            loading="lazy"
                                            onError={(e) => {
                                                e.currentTarget.src = '/fallback-brand.png';
                                                e.currentTarget.className = 'w-full h-full object-cover p-3 opacity-70';
                                            }}
                                        />
                                        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300"></div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-20">
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">Ready to join our esteemed clientele?</h3>
                    <Link to='/contact'>
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