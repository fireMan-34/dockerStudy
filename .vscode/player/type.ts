type EmptyArr<L extends number, T = unknown, Arr extends unknown[] =[]> = Arr['length'] extends L ? Arr : EmptyArr<L, T, [ ...Arr, T ]>;

type CreateArr<L extends number, T = unknown, Arr extends unknown[]=[]> = Arr['length'] extends L ? Arr : CreateArr<L, T, [ ...Arr, T ]>;
