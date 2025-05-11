import { GoogleGenAI } from "@google/genai";
import { GeminiAI_key } from './constants';

const ai = new GoogleGenAI({ apiKey: GeminiAI_key  });

 
export default ai;