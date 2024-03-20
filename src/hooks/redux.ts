import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../store/store";


export const useAppDispatch = () => useDispatch<AppDispatch>()
//Типизируем хук useSelector типом корневого редьюсера. Без такой типизации обычный useSelector
//не знает, какие редьюсеры есть в корневом редьюсеры, какие у этих редьюсеров есть поля.
//Такая типизация во первых позволяет среде подсказывать разрабу, что возращать, а
//во вторых позволяет не допустить ошибку обращения к несуществующему редьюсеру или полю
export const useAppSelector : TypedUseSelectorHook<RootState> = useSelector;