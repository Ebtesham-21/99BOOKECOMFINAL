import {hash} from "bcryptjs";
import { NextResponse } from "next/server";
import {connectDB} from "@/lib/db";
import User from "@/models/User";