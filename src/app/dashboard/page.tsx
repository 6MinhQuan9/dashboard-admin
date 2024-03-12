'use client'
import { CommonModal } from "@/components";
import { RefModal } from "@/components/Modal/CommonModal";
import { DeleteOutlined, EditOutlined, PlusCircleOutlined } from "@ant-design/icons";
import { Button, Space, Table, TableProps } from "antd";
import { useRef } from "react";

interface DataType {
   key: string;
   name: string;
   age: string | number;
   address: string;
}

function Dashboard() {
  const deleteRefModal = useRef<RefModal>();

   const dataSource = [
      {
         key: '1',
         name: 'Mike',
         age: 32,
         address: '10 Downing Street',
      },
      {
         key: '2',
         name: 'John',
         age: 42,
         address: '10 Downing Street',
      },
   ];

   const columns: TableProps<DataType>['columns'] = [
      {
         title: 'STT',
         dataIndex: 'id',
         key: 'id',
         width: 5,
         align: 'center',
         render: (_: string, _record: DataType, index: number) => index + 1,
      },
      {
         title: 'Action',
         dataIndex: 'action',
         key: 'action',
         width: 20,
         render: (_: string, record: DataType) => {
            return <Space>
               <Button 
                  icon={<EditOutlined />} 
                  type="text" 
               />

               <Button 
                  icon={<DeleteOutlined />} 
                  type="text" danger 
                  onClick={onHandleDelete}
               />
            </Space>
         }
      },
      {
         title: 'Name',
         dataIndex: 'name',
         key: 'name',
      },
      {
         title: 'Age',
         dataIndex: 'age',
         key: 'age',
      },
      {
         title: 'Address',
         dataIndex: 'address',
         key: 'address',
      },
   ];

   const onHandleDelete = () => {
      deleteRefModal.current?.setOpenModal(true)
   }
   
   return (
      <>
         <Button 
            icon={<PlusCircleOutlined />}
         >
            Tạo mới
         </Button>

         <Table<DataType>
            dataSource={dataSource}
            columns={columns}
            bordered
         />

         <CommonModal 
            ref={deleteRefModal}
            title="Xác nhận xóa"
            onOk={() => {}}
         >
            <div style={{ textAlign: 'center' }}> Bạn có chắc muốn xoá bản ghi này?</div>
         </CommonModal>
      </>
   )
}

export default Dashboard