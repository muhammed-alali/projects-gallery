export default function TitleHead({ title }: { title: string }) {
  return (
    <>
      <h1 className="  text-SiteColor tracking-[0.8px] uppercase  leading-[24px] text-[14px]   font-semibold ">
        {title}
      </h1>
    </>
  );
}
