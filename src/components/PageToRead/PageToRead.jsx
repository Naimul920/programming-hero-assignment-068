import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from 'recharts';
import { getStoredBook } from '../../utility/localstorage';

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];
const getPath = (x, y, width, height) => {
  return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
  Z`;
};

const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;

  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};
export default function PageToRead() {
    const books=useLoaderData();
    const [allReadBooks, setAllReadBooks] = useState([]);
    useEffect(() => {
        const readBookIds = getStoredBook();
        if (readBookIds.length > 0) {
          setAllReadBooks(books.filter((book) => readBookIds.includes(book.bookId)));
        }
      }, [books]);

console.log(allReadBooks);
  return (
    <div className="flex justify-center">
      <BarChart
      width={600}
      height={400}
      data={allReadBooks}
      margin={{
        top: 50,
        right: 30,
        left: 20,
        bottom:50,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="bookName" />
      <YAxis />
      <Bar dataKey="totalPages" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
        {allReadBooks.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={colors[index % 20]} />
        ))}
      </Bar>
    </BarChart>
    </div>
  )
}
