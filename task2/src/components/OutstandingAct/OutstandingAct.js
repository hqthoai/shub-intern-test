import React from "react";
import Slider from "../Slider/Slider";
import gif from "../../assets/images/networking.gif";

function OutstandingAct() {
  return (
    <div className="md:px-6 px-4 my-20 flex flex-col justify-center items-center max-w-[1200px] m-auto">
      <div className="flex flex-col w-[66%] justify-center items-center mb-14">
        <div>
          <img src={gif} alt="gif" width="56px" height="56px" />
        </div>
        <p className="text-center font-pop font-semibold text-[32px] leading-[44px] tracking-[.1px] mt-[14px] mb-[24px]">
          Hoạt động tiêu biểu từ cộng đồng giáo dục
        </p>
        <p className="text-center font-pop text-[20px] leading-8 tracking-[.1px]">
          Hình ảnh được chính những giáo viên từ khắp 3 miền ghi lại trong quá
          trình giảng dạy, dạy học ứng dụng công nghệ SHub Classroom.
        </p>
      </div>
      {/* slider */}
      <Slider />
    </div>
  );
}

export default OutstandingAct;
