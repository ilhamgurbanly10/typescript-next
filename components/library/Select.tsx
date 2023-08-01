import React, {useState, useMemo, useCallback, memo, useRef, useEffect} from "react";
import styles from "./Select.module.scss";
import { CloseOutlined, SearchOutlined } from '@ant-design/icons';
import { turkishCharacterRegex } from '../../pages/api/functions';

export interface SelectData {
    value: string;
    name: string;
    disabled?: boolean;
}

export interface Select {
    data: SelectData[];
    allowSearch?: boolean;
    defaultValue?: string;
    onChange: (e: SelectData) => void;
    placeholder?: string;
    fullWidth?: boolean;
    className?: string;
    allowClear?: boolean;
    searchPlaceholder?: string;
    notFoundedText?: string;
}

const Select: React.FC<Select> = ({data, allowSearch = true, defaultValue = "", onChange, placeholder="Select an item...", fullWidth = false, className = "", allowClear = false, searchPlaceholder = "Search an item...", notFoundedText = "Not Founded"}) => {

    // const defaultObj = data?.filter((d) => { return d.value == defaultValue});
    const [selected, setSelected] = useState<{name: string, value: string }>({name: '', value: ''});
    const [open, setOpen] = useState<boolean>(false);

    const input: React.RefObject<HTMLInputElement> = useRef<HTMLInputElement>(null);

    const [searchedData, setSearchedData] = useState<SelectData[]>([]);
    const [isSearched, setIsSearched] = useState<boolean>(false);
    const [showSearch, setShowSearch] = useState<boolean>(false);
    const [value, setValue] = useState<string>('');

    const dropdown =  useRef<HTMLDivElement | null>(null);
    const toggler =  useRef<HTMLDivElement | null>(null);
    const emptyObj = useMemo<SelectData>(() => {
        return {name: '', value: ''}
    }, [])

    const closeOnWindowClick = useCallback((): void => {
        document.addEventListener('click', function(event: MouseEvent) {
            const innerClick = dropdown?.current?.contains(event.target as Node) || toggler?.current?.contains(event.target as Node)
            if (!innerClick) setOpen(false);
        });
    }, [])

    // kenarda bosala biler, bes bunun secilmis deyeri nece itecek ?
    // if sertleri mumkun qeder azaldilsin
    // kodlarin seliqesi ve qisa yazilmasi

    const select = useCallback((data: SelectData): void => {
        setSelected(data);
        onChange(data);
        setShowSearch(false);
    }, [])

    const focusOnInput = useCallback(() => { setTimeout(() => { input?.current?.focus()}, 500) }, [])

    const clear = useCallback((): void => {
        setSelected(emptyObj); 
        onChange(emptyObj);
    }, [])

    const selectDefaultValue = useCallback((): void => {
       const selectedItem = data?.filter((d) => { return d.value == defaultValue })
       if (selectedItem?.length > 0) setSelected(selectedItem[0]);
       console.log(selectedItem[0])
    }, [])

    const search = (val: string) => {
        // setValue(val);
        if (val != "") { setIsSearched(true); setSearchedData(data.filter((item) => { return turkishCharacterRegex(item?.name?.toLowerCase()).includes(turkishCharacterRegex(val?.toLowerCase()))})) }
        else setIsSearched(false);
        // emptyAreas();
    }

    useEffect(() => {
        closeOnWindowClick();
        if (defaultValue != "") selectDefaultValue();
    }, [])

    return (
        <div className={`${styles.container} ${fullWidth ? styles.fullWidth : ''} ${open ? styles.open : ''} ${className}`}>
            
            <div className={styles.toggler} ref={toggler} onClick={() => { setOpen(!open); }}>
                
                {allowSearch && showSearch && <input value={value} placeholder={searchPlaceholder} type="text" ref={input} className={styles.input} onChange={(e) => { search(e?.target?.value); setValue(e?.target?.value); }} onClick={(e) => { e.stopPropagation(); setOpen(true); }}/>}
                
                {!showSearch && 
                    <div className={styles.box}>
                        {selected?.name ? 
                            selected?.name 
                            : 
                            <span className={styles.placeholder}>{placeholder}</span>
                        }
                    </div>
                }

                {allowClear && selected?.name != "" && 
                    <button className={`${styles.clear} ${allowClear && !showSearch ? styles.clearOffset : ''}`} onClick={(e) => { clear(); e?.stopPropagation(); }}><CloseOutlined/></button>
                }

                {allowSearch && showSearch && 
                    <button className={styles.clearSearch} onClick={(e) => { setShowSearch(false); e?.stopPropagation(); }}><CloseOutlined/></button>
                }

                {allowSearch && !showSearch && 
                    <button className={styles.showSearch} onClick={(e) => { setShowSearch(true); focusOnInput(); e?.stopPropagation(); setOpen(true); }}><SearchOutlined/></button>
                }

            </div>

            <div className={`${styles.dropdown}`} ref={dropdown}>
                
                {searchedData?.length == 0 && showSearch && isSearched && <p className={styles.notFound}>{notFoundedText}</p>}
                
                {isSearched && showSearch  ? 
                    searchedData?.map((d, i) => (
                        <div className={`${styles.item} ${selected.value == d.value ? styles.active : ''} ${d.disabled ? styles.disabled : ''}`} key={i} onClick={() => { if (!d?.disabled) { select(d); setOpen(false); }  }}>
                            {d?.name}
                        </div>
                    ))
                    :
                    data?.map((d, i) => (
                        <div className={`${styles.item} ${selected.value == d.value ? styles.active : ''} ${d.disabled ? styles.disabled : ''}`} key={i} onClick={() => { if (!d?.disabled) { select(d); setOpen(false); }  }}>
                            {d?.name}
                        </div>
                    ))
                }

            </div>

        </div>
    )

}

export default memo(Select);