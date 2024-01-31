
import { Grid, Text } from "@chakra-ui/react";
import MNavbar from "../_components/Manager-Navbar";
import TSidebar from "../_components/Manager-Sidebar";

async function getData() {
  try {
    const res = await fetch("http://localhost:5000/users");

    if (!res.ok) {
      throw new Error(`ไม่สามารถดึงข้อมูลได้. สถานะ: ${res.status}`);
    }

    return res.json();
  } catch (error) {
    console.error("ข้อผิดพลาดในการดึงข้อมูล:", error);
    throw error; // โยนข้อผิดพลาดอีกครั้งเพื่อให้คอมโพเนนต์จับได้
  }
}

export default async function Page() {
  try {
    const data = await getData();

    return (
      <main>
        <MNavbar />
        <Grid
          templateColumns={{
            base: "repeat(1, 1fr)",
            sm: "repeat(1, 1fr)",
            md: "repeat(1, 1fr)",
            lg: "repeat(3, 1fr)",
            xl: "repeat(3, 1fr)",
            "2xl": "repeat(3, 1fr)",
          }}
          gap={6}
          mt={2}
        >
          <TSidebar />
          <ul>
            {data.map((item) => (
              <>
                <li key={item.id}>

                  { item.id } {item.name} {item.lastname} {item.phone}{" "}
                  
                </li>
              </>
            ))}
          </ul>
        </Grid>
      </main>
    );
  } catch (error) {
    console.error("ข้อผิดพลาดในคอมโพเนนต์ Page:", error);
    return <div>ข้อผิดพลาดในการโหลดข้อมูล</div>; // คุณสามารถเรียก UI สำรองสำหรับข้อผิดพลาด
  }
}

