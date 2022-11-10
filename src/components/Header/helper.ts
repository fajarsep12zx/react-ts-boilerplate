export const transformMap = (data = []) => data.map((dt) => ({
  key: dt.key,
  label: dt.value,
}))
