"use client"; // จำเป็นสำหรับ Next.js App Router เมื่อใช้ hooks
import { useEffect, useState } from "react";

// 1. กำหนดโครงสร้างข้อมูลสินค้า (Interface)
interface ProductItem {
  id: number;
  title: string;
  price: number;
  image: string;
  description: string;
}

const ProductPage = () => {
  // 2. สร้าง State สำหรับเก็บข้อมูลสินค้า
  const [products, setProducts] = useState<ProductItem[]>([]);

  // 3. ดึงข้อมูลจาก API เมื่อ Component โหลด
  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=10")
      .then((res) => res.json())
      .then((data: ProductItem[]) => {
        // --- ส่วนที่แก้ไข: ใช้ .slice(0, 3) เพื่อเลือกแค่ 3 รายการแรก ---
        setProducts(data.slice(0, 3));
      })
      .catch((err) => console.error("Error fetching products:", err));
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Our Products (Limit 3)</h1>
      
      {/* 4. แสดงผลข้อมูลสินค้าแบบ Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <div key={product.id} className="border rounded-lg p-4 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow">
            <div>
              <img 
                src={product.image} 
                alt={product.title} 
                className="h-40 w-full object-contain mb-2" 
              />
              <h2 className="text-sm font-semibold text-gray-800 line-clamp-2">
                {product.title}
              </h2>
            </div>
            <p className="text-lg font-bold text-blue-600 mt-2">
              ${product.price.toFixed(2)}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductPage;