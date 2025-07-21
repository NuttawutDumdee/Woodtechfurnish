const services = [
    { icon: "🖌️", title: "ออกแบบ 3D", desc: "เห็นก่อนตัดสินใจ พร้อมปรับแก้ได้" },
    { icon: "🛠️", title: "ผลิตเองในโรงงาน", desc: "ควบคุมคุณภาพทุกขั้นตอน" },
    { icon: "🚚", title: "ติดตั้งหน้างาน", desc: "ทีมงานมืออาชีพถึงที่ ตรงเวลา" },
];

export default function ServiceSection() {
    return (
        <section id="services" className="py-20 bg-white text-center">
            <h2 className="text-4xl font-bold mb-10">บริการของเรา</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
                {services.map((s) => (
                    <div key={s.title} className="bg-gray-100 p-6 rounded-xl shadow hover:shadow-lg transition">
                        <div className="text-5xl mb-4">{s.icon}</div>
                        <h3 className="text-2xl font-semibold mb-2">{s.title}</h3>
                        <p className="text-gray-600">{s.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
