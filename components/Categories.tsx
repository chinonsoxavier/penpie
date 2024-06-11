import { Categories as CategoriesData } from '@/interface/exports';
import ButtonWidget from '@/app/widgets/ButtonWidget';
import Image from 'next/image';
import { ShapeOnHover01, ShapeOnHover02, categoriesBg } from '@/constants/exports';

const Categories = () => {
  return (
    <div className="wrapper">
      <div className="max-width center gap-5 flex-wrap">
        {CategoriesData.map((category, index) => (
          <div
            key={index}
            className="shadow-lg rounded-3xl bg-white flex-1 min-w-[270px]"
          >
            <div className="bg-secondary rounded-t-xl rounded-b-[70px] center flex-col gap-5 text-center pt-10 pb-24">
              <p className="text-2xl base:text-xl text-white font-semibold">
                {category.text}
              </p>
              <ButtonWidget
                text="See Menu"
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-arrow-right"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                    />
                  </svg>
                }
                accent="secondary"
                border="#fcb302"
                className="bg-secondary text-white fill-white border-2 border-primary  before:bg-primary"
              />
            </div>
            <div
              style={{
                background: `url(${categoriesBg.src})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "contain",
                backgroundPositionY: "80px",
              }}
              className="center -mt-[60px] relative group  "
            >
              <Image
                src={ShapeOnHover01}
                className={`object-contain group-hover:scale-[100%] scale-0 absolute -top-8 left-8 duration-700 `}
                alt="Shape on hover"
              />
              <Image
                className="w-full h-full object-contain max-w-[300px] "
                alt=""
                src={category.image}
              />

              <Image
                src={ShapeOnHover02}
                className={`object-contain w-fll -full absolute -top-8 right-8 duration-700 group-hover:scale-[100%] scale-0 `}
                alt="Shape on hover"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Categories