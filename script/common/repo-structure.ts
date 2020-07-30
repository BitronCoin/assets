import * as path from "path";
import {
    isPathExistsSync,
    readDirSync
} from "./filesystem";

export const logoName = `logo`;
export const infoName = `info`;
export const listName = `list`
export const logoExtension = "png";
export const jsonExtension = "json";
export const logoFullName = `${logoName}.${logoExtension}`;
export const infoFullName = `${infoName}.${jsonExtension}`;
const whiteList = `whitelist.${jsonExtension}`;
const blackList = `blacklist.${jsonExtension}`;
export const validatorsList = `${listName}.${jsonExtension}`

export const chainsPath: string = path.join(process.cwd(), '/blockchains');
export const getChainPath = (chain: string): string => `${chainsPath}/${chain}`;
export const getChainLogoPath = (chain: string): string => `${getChainPath(chain)}/info/${logoFullName}`;
export const getChainAssetsPath = (chain: string): string => `${getChainPath(chain)}/assets`;
export const getChainAssetPath = (chain: string, asset: string) => `${getChainAssetsPath(chain)}/${asset}`;
export const getChainAssetLogoPath = (chain: string, asset: string): string => `${getChainAssetPath(chain, asset)}/${logoFullName}`;
export const getChainAssetInfoPath = (chain: string, asset: string): string => `${getChainAssetPath(chain, asset)}/${infoFullName}`;
export const getChainWhitelistPath = (chain: string): string => `${getChainPath(chain)}/${whiteList}`;
export const getChainBlacklistPath = (chain: string): string => `${getChainPath(chain)}/${blackList}`;

export const getChainValidatorsPath = (chain: string): string => `${getChainPath(chain)}/validators`;
export const getChainValidatorsListPath = (chain: string): string => `${getChainValidatorsPath(chain)}/list.${jsonExtension}`;
export const getChainValidatorsAssetsPath = (chain: string): string => `${getChainValidatorsPath(chain)}/assets`
export const getChainValidatorAssetLogoPath = (chain: string, asset: string): string => `${getChainValidatorsAssetsPath(chain)}/${asset}/${logoFullName}`

export const isChainAssetInfoExistSync = (chain: string, address: string) => isPathExistsSync(getChainAssetInfoPath(chain, address));

export const getChainAssetsList = (chain: string): string[] => readDirSync(getChainAssetsPath(chain));
export const getChainAssetFilesList = (chain: string, address: string) => readDirSync(getChainAssetPath(chain, address));