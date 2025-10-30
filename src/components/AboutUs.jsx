import banner2 from "../assets/banner2.webp";

const AboutUs = () => {
  return (
    <>
      <div className="h-screen rounded-md m-2 bg-peach flex items-center justify-center">
        <div className="bg-lion w-[900px] h-[400px] rounded-md flex items-center justify-center ">
          <img src={banner2} className="w-2/5 "></img>
          <p className="w-1/2 font-Vazir text-bistre text-lg font-medium text-justify ">
            به فروشگاه ما خوش اومدید! ما عاشق طبیعت، سفر و ماجراجویی هستیم و
            می‌دونیم هیچ چیز لذت‌بخش‌تر از یه کمپ بی‌دغدغه با تجهیزات کامل نیست.
            اینجا جاییه که می‌تونید هرچی برای سفر و کمپینگ نیاز دارید پیدا کنید؛
            از چادر و کیسه‌خواب گرفته تا لوازم پخت‌و‌پز و ابزارهای بقا. هدف ما
            اینه که تجربه‌ی کمپ رفتن رو برای همه ساده‌تر، امن‌تر و لذت‌بخش‌تر
            کنیم. ما فقط وسایل نمی‌فروشیم، بلکه به شما کمک می‌کنیم
            ماجراجویی‌هاتون رو واقعی‌تر زندگی کنید. به جمع طبیعت‌دوست‌های ما خوش
            اومدید 🌲🔥 با ما هر سفر، یه داستان جدید شروع میشه...
          </p>
        </div>
      </div>
    </>
  );
};
export default AboutUs;
