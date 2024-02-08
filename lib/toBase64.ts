import {Buffer} from "buffer";

export default function toBase64(data: string): string {
    return Buffer.from(data, 'binary').toString('base64')
}