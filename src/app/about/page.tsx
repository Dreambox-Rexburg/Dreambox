import Image from "next/image";

export default function About() {
  const infoItem = [
    {
      title: "How do selfie museums work?",
      content:
        "At DreamBox, you have control of your photos— which means you have control of your fun! The selfie-taking experience works like this: Place your phone on a ring light stand that is positioned in front of each room or backdrop. These stands are equipped with LED lights that provide a bright and even light source for taking photos. Connect the included Bluetooth clicker to your phone. This clicker will allow you to take photos remotely, without having to press the on-screen button or use the volume button. You will be given this clicker at the beginning of your visit. Adjust the settings on your phone to your desired settings, such as ISO, shutter speed, and flash. Or just start taking pictures right away.This setup allows you to take your own photos, without the need for a professional photographer. This means that you're the one that calls the shots. You can take as many photos as you want— whether you're doing a solo photoshoot or with your friends and family. When you come to Dreambox, you have more control over the final outcome of your photos.",
      imageUrl: "/500x500.jpg",
    },
    {
      title: "How do selfie museums work?",
      content:
        "At DreamBox, you have control of your photos— which means you have control of your fun! The selfie-taking experience works like this: Place your phone on a ring light stand that is positioned in front of each room or backdrop. These stands are equipped with LED lights that provide a bright and even light source for taking photos. Connect the included Bluetooth clicker to your phone. This clicker will allow you to take photos remotely, without having to press the on-screen button or use the volume button. You will be given this clicker at the beginning of your visit. Adjust the settings on your phone to your desired settings, such as ISO, shutter speed, and flash. Or just start taking pictures right away.This setup allows you to take your own photos, without the need for a professional photographer. This means that you're the one that calls the shots. You can take as many photos as you want— whether you're doing a solo photoshoot or with your friends and family. When you come to Dreambox, you have more control over the final outcome of your photos.",
      imageUrl: "/600x400.jpg",
    },
    {
      title: "How do selfie museums work?",
      content:
        "At DreamBox, you have control of your photos— which means you have control of your fun! The selfie-taking experience works like this: Place your phone on a ring light stand that is positioned in front of each room or backdrop. These stands are equipped with LED lights that provide a bright and even light source for taking photos. Connect the included Bluetooth clicker to your phone. This clicker will allow you to take photos remotely, without having to press the on-screen button or use the volume button. You will be given this clicker at the beginning of your visit. Adjust the settings on your phone to your desired settings, such as ISO, shutter speed, and flash. Or just start taking pictures right away.This setup allows you to take your own photos, without the need for a professional photographer. This means that you're the one that calls the shots. You can take as many photos as you want— whether you're doing a solo photoshoot or with your friends and family. When you come to Dreambox, you have more control over the final outcome of your photos.",
      imageUrl: "/400x600.jpg",
    },
  ];
  return (
    <>
      <main className='flex justify-center mx-5'>
        <div className='container max-w-screen-lg mx-auto'>
          {infoItem.map((item, index) => (
            <div
              key={index}
              className='flex flex-row [&:nth-child(even)]:flex-row-reverse my-32 items-center wrap gap-4'
            >
              <div className='grow-0 sm:basis-2/3'>
                <h2 className='text-xl font-bold'>{item.title}</h2>
                <p>{item.content}</p>
              </div>
              <div className='grow basis-1/3 w-full min-h-[10em] max-h-[40em] hidden sm:block'>
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className='rounded-[2.5em]'
                />
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
