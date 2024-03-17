import Image from "next/image";

export default function About() {
  const infoItem = [
    {
      title: "How do selfie museums work?",
      content:
        "At DreamBox, you have control of your photos— which means you have control of your fun! The selfie-taking experience works like this: Place your phone on a ring light stand that is positioned in front of each room or backdrop. These stands are equipped with LED lights that provide a bright and even light source for taking photos. Connect the included Bluetooth clicker to your phone. This clicker will allow you to take photos remotely, without having to press the on-screen button or use the volume button. You will be given this clicker at the beginning of your visit. Adjust the settings on your phone to your desired settings, such as ISO, shutter speed, and flash. Or just start taking pictures right away.This setup allows you to take your own photos, without the need for a professional photographer. This means that you're the one that calls the shots. You can take as many photos as you want— whether you're doing a solo photoshoot or with your friends and family. When you come to Dreambox, you have more control over the final outcome of your photos.",
      imageUrl: "/photoCarousel/1.jpeg",
    },
    {
      title: "How do selfie museums work?",
      content:
        "At DreamBox, you have control of your photos— which means you have control of your fun! The selfie-taking experience works like this: Place your phone on a ring light stand that is positioned in front of each room or backdrop. These stands are equipped with LED lights that provide a bright and even light source for taking photos. Connect the included Bluetooth clicker to your phone. This clicker will allow you to take photos remotely, without having to press the on-screen button or use the volume button. You will be given this clicker at the beginning of your visit. Adjust the settings on your phone to your desired settings, such as ISO, shutter speed, and flash. Or just start taking pictures right away.This setup allows you to take your own photos, without the need for a professional photographer. This means that you're the one that calls the shots. You can take as many photos as you want— whether you're doing a solo photoshoot or with your friends and family. When you come to Dreambox, you have more control over the final outcome of your photos.",
      imageUrl: "/photoCarousel/1.jpeg",
    },
    {
      title: "How do selfie museums work?",
      content:
        "At DreamBox, you have control of your photos— which means you have control of your fun! The selfie-taking experience works like this: Place your phone on a ring light stand that is positioned in front of each room or backdrop. These stands are equipped with LED lights that provide a bright and even light source for taking photos. Connect the included Bluetooth clicker to your phone. This clicker will allow you to take photos remotely, without having to press the on-screen button or use the volume button. You will be given this clicker at the beginning of your visit. Adjust the settings on your phone to your desired settings, such as ISO, shutter speed, and flash. Or just start taking pictures right away.This setup allows you to take your own photos, without the need for a professional photographer. This means that you're the one that calls the shots. You can take as many photos as you want— whether you're doing a solo photoshoot or with your friends and family. When you come to Dreambox, you have more control over the final outcome of your photos.",
      imageUrl: "/photoCarousel/1.jpeg",
    },
  ];
  return (
    <>
      <div className='container'>
        {infoItem.map((item, index) => (
          <div
            key={index}
            className='flex flex-row [&:nth-child(odd)]:flex-row-reverse'
          >
            <div>
              <h2>{item.title}</h2>
              <p>{item.content}</p>
            </div>
            <Image
              src={item.imageUrl}
              alt={item.title}
              width={100}
              height={100}
            />
          </div>
        ))}
      </div>
    </>
  );
}
