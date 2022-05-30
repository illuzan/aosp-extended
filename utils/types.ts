export type Navigation = {
  name: string
  href: string
}[]

export type Social = {
  name: string
  href: string
  icon: (props: any) => JSX.Element
}[]

export type StatsTypes = {
  deviceCountList: { _id: string; name: string; model: string; count: number }[]
  countryCountList: { name: string; count: number }[]
  versionCountList: { _id: string; name: string; count: number }[]
  totalInstallations: number
  officialInstallations: number
  unofficialInstallations: number
}

export type DeviceStats = {
  buildsCountList: { _id: string; buildName: string; count: number }[]
  countryCountList: { name: string; count: number }[]
  versionCountList: { _id: string; name: string; count: number }[]
  deviceModel: string
  totalInstallations: number
  officialInstallations: number
  unofficialInstallations: number
}

export type SupportedDevices = {
  name: string
  brand: string
  codename: string
  supported_versions:
    | {
        version_code: string
        version_name: string
        maintainer_name: string
        maintainer_url: string
        xda_thread: string
        tg_link?: string | null
        supportsCustomAvb?: boolean | null
      }[]
    | null
}[]

export type BuildDetails = {
  file_name: string
  file_size: number
  timestamp: string
  md5: string
  download_link: string
  recovery_download_link?: string
  isCustomAvbSupported?: boolean
  downloads_count: number
  changelog?: string
}[]
