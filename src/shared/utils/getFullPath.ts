import { IPathMapping } from '@/entities/Header/constant';

export function getFullPath(
  parentPath: string,
  child: string | IPathMapping,
  childKey: string
): string {
  if (typeof child === 'string') {
    return '/sub_page' + parentPath + child;
  } else if (child.path) {
    return '/sub_page' + parentPath + child.path;
  } else {
    return '/sub_page' + parentPath;
  }
}
