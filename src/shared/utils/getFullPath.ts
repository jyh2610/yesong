import { IPathMapping } from '@/entities/Header/constant';

export function getFullPath(
  parentPath: string,
  child: string | IPathMapping
): string {
  if (typeof child === 'string') {
    return '/sub_page' + parentPath + child;
  }
  if (child.path) {
    const defaultKey = Object.keys(child.children);
    return (
      '/sub_page' + parentPath + child.path + child.children[defaultKey[0]]
    );
  } else {
    return '/sub_page' + parentPath;
  }
}
