import { createBrowserRouter } from 'react-router-dom';

import CustomerLayout from '@/features/customer/layouts/CustomerLayout';
import CustomerMain from '@/features/customer/pages/CustomerMain';
import ManagerLayout from '@/features/manager/layouts/ManagerLayout';
import ManagerMain from '@/features/manager/pages/ManagerMain';
import ManagerReservations from '@/features/manager/pages/ManagerReservations';
import AdminLogin from '@/features/admin/pages/AdminLogin';
import AdminLayout from '@/features/admin/layouts/AdminLayout';
import AdminMain from '@/features/admin/pages/AdminMain';
import AdminAccount from '@/features/admin/pages/AdminAccount';
import AdminNotices from '@/features/admin/pages/AdminNotices';
import AdminCustomers from '@/features/admin/pages/AdminCustomers';
import AdminInquiries from '@/features/admin/pages/AdminInquiries';
import AdminManagers from '@/features/admin/pages/AdminManagers';
import AdminBanners from '@/features/admin/pages/AdminBanners';
import AdminManagerDetail from '@/features/admin/pages/AdminManagerDetail';

export const router = createBrowserRouter([
  /** 수요자 *************************************************************/
  {
    path: '/customers',
    element: <CustomerLayout />,
    children: [
      // 메인페이지
      { index: true, element: <CustomerMain /> }, 
      // 서비스 소개
      // { path: 'services', element: <CustomerService /> },
      // 후기
      // { path: 'reviews', element: <CustomerReviews /> },
      // 고객센터
      // { path: 'support', element: <CustomerSuppoert /> },
    ],
  },

  /** 매니저 *************************************************************/
  {
    path: '/managers/login',
    children: [
      // 매니저 로그인
      // { index: true, element: <ManagerLogin /> },
    ],
  },
  {
    path: '/managers',
    element: <ManagerLayout />,
    children: [
      // 메인페이지 (= 대시보드)
      { index: true, element: <ManagerMain /> }, 
      // 마이페이지
      // { path: 'my', element: <ManagerMy /> },
      // // 예약 관리 목록
      { path: 'reservations', element: <ManagerReservations /> },
      // // 리뷰 관리 목록
      // { path: 'reviews', element: <ManagerReviews /> },
      // // 문의 내역 목록
      // { path: 'inquiries', element: <ManagerInquiries /> },
      // // 급여 관리 목록
      // { path: 'payments', element: <ManagerPayments /> },
    ],
  },

  /** 관리자 *************************************************************/
  {
    path: '/admins/login',
    children: [
      // 관리자 로그인
      { index: true, element: <AdminLogin /> },
    ],
  },
  {
    path: '/admins',
    element: <AdminLayout />,
    children: [
      // 메인페이지 (= 대시보드)
      { index: true, element: <AdminMain /> }, 
      // 관리자 계정 목록
      { path: 'accounts', element: <AdminAccount /> },
      // 고객 정보 목록
      { path: 'customers', element: <AdminCustomers /> },
      // 매니저 정보 목록
      { path: 'managers', element: <AdminManagers /> },
      // 매니저 상세 정보
      { path: 'managers/:id', element: <AdminManagerDetail /> },
      // 문의 내역 목록
      { path: 'inquiries', element: <AdminInquiries /> },
      // 공지/이벤트 목록
      { path: 'notices', element: <AdminNotices /> },
      // 배너 관리 목록
      { path: 'banners', element: <AdminBanners /> },
    ],
  },
]);
