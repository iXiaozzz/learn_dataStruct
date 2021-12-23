export function log(key: string, val: any) {
  if (!val) val = key;
  console.log(key, val);
}
