import { db } from '@firebaseConfig';
import { collection, getDocs, addDoc, updateDoc, deleteDoc, setDoc, query, where, orderBy, limit   } from 'firebase/firestore';

const getAllData = async () => {
    const querySnapshot = await getDocs(collection(db, 'users'));
    const mapData =  querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    return mapData

}
const addData  = async (user) => {
    await addDoc(collection(db, 'users'), {
        name: user.name,
      });
}
// cập nhật data
const updateData = async (user) => {
    let {id, ...userData} = user;
      // Tham chiếu đến tài liệu trong collection 'users'
      const userRef = doc(db, 'users', id);
    await updateDoc(userRef, userData)
}
// xóa data
const deleteUser = async (id) => {

try {
    // Tham chiếu đến tài liệu trong collection 'users'
    const userRef = doc(db, 'users', id);

    // Xóa tài liệu
    await deleteDoc(userRef);

    console.log('Xóa thành công!');
  } catch (error) {
    console.error('Lỗi khi xóa:', error);
  }
}

// xử dụng set trong trường hợp muốn tạo ID riêng
const setUser = async (user) => {
    let {id, ...dataUser} = user
    try {
        const userRef = doc(db, 'users', id);

        setDoc(userRef, dataUser, { merge: true })
    }
    catch (err) {
        console.log('lỗi khi thêm')
    }
} 
// xử dụng qerry để lọc theo điều kiện

const getUsertoquery = async () => {
    try {

        const q = query(
            collection(db, 'users'),
            where('age', '>', 18) // Điều kiện lấy dữ liệu
        );
        const querySnapshot = await getDocs(q);
        const mapData =  querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        return mapData
    }
    catch(err){
        return []
    }
}
// Các điều kiện phổ biến
// ==: Bằng
// !=: Không bằng
// <: Nhỏ hơn
// <=: Nhỏ hơn hoặc bằng
// >: Lớn hơn
// >=: Lớn hơn hoặc bằng
// array-contains: Kiểm tra phần tử trong mảng
// in: Kiểm tra giá trị nằm trong một tập hợp giá trị

// Sắp xếp và giới hạn
// Thêm vào truy vấn
const q = query(
    collection(db, 'users'),
    where('age', '>', 18),
    orderBy('age', 'asc'), // Sắp xếp theo tuổi tăng dần
    limit(10) // Giới hạn 10 kết quả
  );