import { tokenController } from '@/shared';
import AdminButton from '../DashBoard/ui/AdminButton';
import { GalleryList } from './ui/GalleryList';

export function GalleryPage() {
  console.log(tokenController.getAccessToken());
  return (
    <div>
      <p className="font-semibold text-5xl">갤러리</p>
      {/* {tokenController.getAccessToken() !== undefined && <AdminButton />} */}
      <GalleryList />
    </div>
  );
}
