import { Admin, Resource } from "react-admin";
import simpleRestProvider from 'ra-data-simple-rest'
import {StudentsList, StudentsCreate, StudentsEdit, StudentsShow} from "../componets/Students"
import authProvider from "../AuthProvider/AuthProvider";
import { ProfsCreate, ProfsEdit, ProfsList, ProfsShow } from "../componets/profs";
import { GrupCreate, GrupEdit, GrupList, GrupShow } from "../componets/grup";
import { DicCreate, DicEdit, DicList, DicShow } from "../componets/dicente";
import portugueseMessages from "@henriko/ra-language-portuguese";
import polyglotI18nProvider from "ra-i18n-polyglot";

const messages = {
  pt: portugueseMessages,
};

const i18nProvider = polyglotI18nProvider((locale) => messages[locale], "pt")


const dataProvider = simpleRestProvider("http://localhost:3002")


const Adm = () => (
  <Admin dataProvider={dataProvider} authProvider={authProvider} i18nProvider={i18nProvider}>
    <Resource name="user" list={StudentsList} edit={StudentsEdit} create={StudentsCreate} show={StudentsShow} />
    <Resource name="prof" list={ProfsList} edit={ProfsEdit} create={ProfsCreate} show={ProfsShow} />
    <Resource name="grup" list={GrupList} edit={GrupEdit} create={GrupCreate} show={GrupShow} />
    <Resource name="dicente" list={DicList} edit={DicEdit} create={DicCreate} show={DicShow} />
  </Admin>
);

export default Adm;