import {MDXRemote} from "next-mdx-remote/rsc"

export function MdxRemoteComponent({serializedSource}:{serializedSource: any}){
    return <MDXRemote source={serializedSource}/>
}
