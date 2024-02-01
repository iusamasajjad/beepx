"use client"
import Image from "next/image"
import beepx from "./beepx.png"
import search from "./search.png"
import React, { useState } from "react"
import profile from "./profile.png"
import floor from "./floorimage.png"
import { Button } from "../ui/button"

interface headerProps {
  profileInfo: boolean
  button: boolean
}
export const Header = ({ profileInfo, button }: headerProps) => {
  const [EventListener, setEventListener] = useState("")
  return (
    <div className="border-b border-gray-800">
      <div className="flex justify-between py-3 px-4 items-center">
        <div className="flex items-center gap-10">
          <div>
            <Image src={beepx} width={80} height={80} alt="beepx" />
          </div>
          <nav>
            <ul className="flex gap-8">
              <li className="flex cursor-pointer items-center gap-1 text-yellow-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M10 3.95833C9.91667 3.95833 9.83335 3.95 9.75835 3.93333C9.67502 3.91667 9.59999 3.89167 9.52499 3.86667C9.44999 3.83333 9.37499 3.79167 9.30832 3.75C9.24165 3.7 9.175 3.65 9.11667 3.59166C8.88334 3.35833 8.75 3.04167 8.75 2.70833C8.75 2.375 8.88334 2.05834 9.11667 1.825C9.175 1.76667 9.24165 1.71667 9.30832 1.66667C9.37499 1.625 9.44999 1.58333 9.52499 1.55833C9.59999 1.525 9.67502 1.5 9.75835 1.48333C10.1584 1.4 10.5917 1.53334 10.8833 1.825C11.1167 2.05834 11.25 2.375 11.25 2.70833C11.25 3.04167 11.1167 3.35833 10.8833 3.59166C10.65 3.825 10.325 3.95833 10 3.95833Z"
                    fill="#EFD22E"
                  />
                  <path
                    d="M10 7.70834C9.91667 7.70834 9.83335 7.70001 9.75835 7.68335C9.67502 7.66668 9.59999 7.64168 9.52499 7.61668C9.44999 7.58334 9.37499 7.54168 9.30832 7.50001C9.24165 7.45001 9.175 7.40001 9.11667 7.34168C8.88334 7.10834 8.75 6.79168 8.75 6.45834C8.75 6.12501 8.88334 5.80835 9.11667 5.57501C9.175 5.51668 9.24165 5.46668 9.30832 5.41668C9.37499 5.37501 9.44999 5.33334 9.52499 5.30834C9.59999 5.27501 9.67502 5.25001 9.75835 5.23334C9.91668 5.20001 10.0833 5.20001 10.2416 5.23334C10.325 5.25001 10.4 5.27501 10.475 5.30834C10.55 5.33334 10.625 5.37501 10.6917 5.41668C10.7583 5.46668 10.825 5.51668 10.8833 5.57501C11.1167 5.80835 11.25 6.12501 11.25 6.45834C11.25 6.79168 11.1167 7.10834 10.8833 7.34168C10.825 7.40001 10.7583 7.45001 10.6917 7.50001C10.625 7.54168 10.55 7.58334 10.475 7.61668C10.4 7.64168 10.325 7.66668 10.2416 7.68335C10.1666 7.70001 10.0833 7.70834 10 7.70834Z"
                    fill="#EFD22E"
                  />
                  <path
                    d="M10 11.0417C9.91667 11.0417 9.83335 11.0333 9.75835 11.0167C9.67502 11 9.59999 10.975 9.52499 10.95C9.44999 10.9167 9.37499 10.875 9.30832 10.8333C9.24165 10.7833 9.175 10.7333 9.11667 10.675C9.05834 10.6167 9.00833 10.5583 8.95833 10.4833C8.91667 10.4167 8.87499 10.3417 8.84165 10.2667C8.81665 10.1917 8.79169 10.1167 8.77502 10.0333C8.75836 9.95834 8.75 9.87501 8.75 9.79168C8.75 9.45834 8.88334 9.14168 9.11667 8.90835C9.175 8.85001 9.24165 8.80001 9.30832 8.75001C9.37499 8.70834 9.44999 8.66668 9.52499 8.63334C9.59999 8.60834 9.67502 8.58334 9.75835 8.56668C10.1584 8.48334 10.5917 8.61668 10.8833 8.90835C11.1167 9.14168 11.25 9.45834 11.25 9.79168C11.25 9.87501 11.2416 9.95834 11.225 10.0333C11.2083 10.1167 11.1833 10.1917 11.15 10.2667C11.125 10.3417 11.0833 10.4167 11.0417 10.4833C10.9917 10.5583 10.9417 10.6167 10.8833 10.675C10.825 10.7333 10.7583 10.7833 10.6917 10.8333C10.625 10.875 10.55 10.9167 10.475 10.95C10.4 10.975 10.325 11 10.2416 11.0167C10.1666 11.0333 10.0833 11.0417 10 11.0417Z"
                    fill="#EFD22E"
                  />
                  <path
                    d="M10 13.9583C9.78335 13.9583 9.56667 13.8667 9.40834 13.7167C9.25834 13.5583 9.16669 13.3417 9.16669 13.125C9.16669 12.9083 9.25834 12.6917 9.40834 12.5333C9.6 12.3417 9.89169 12.2583 10.1584 12.3083C10.2167 12.3167 10.2667 12.3333 10.3167 12.3583C10.3667 12.375 10.4167 12.4 10.4583 12.4333C10.5083 12.4667 10.55 12.5 10.5917 12.5333C10.7417 12.6917 10.8334 12.9083 10.8334 13.125C10.8334 13.3417 10.7417 13.5583 10.5917 13.7167C10.55 13.75 10.5083 13.7833 10.4583 13.8167C10.4167 13.85 10.3667 13.875 10.3167 13.8917C10.2667 13.9167 10.2167 13.9333 10.1584 13.9417C10.1084 13.95 10.05 13.9583 10 13.9583Z"
                    fill="#EFD22E"
                  />
                  <path
                    d="M10 16.6667C9.91667 16.6667 9.83335 16.65 9.75835 16.6167C9.68335 16.5833 9.61664 16.5417 9.55831 16.4833C9.49998 16.425 9.45 16.3583 9.425 16.2833C9.39166 16.2083 9.375 16.125 9.375 16.0417C9.375 15.875 9.44164 15.7167 9.55831 15.6C9.61664 15.5417 9.68335 15.5 9.75835 15.4667C9.91668 15.4 10.0833 15.4 10.2416 15.4667C10.3166 15.5 10.3834 15.5417 10.4417 15.6C10.5 15.6583 10.5417 15.725 10.575 15.8C10.6083 15.875 10.625 15.9583 10.625 16.0417C10.625 16.125 10.6083 16.2083 10.575 16.2833C10.5417 16.3583 10.5 16.425 10.4417 16.4833C10.3834 16.5417 10.3166 16.5833 10.2416 16.6167C10.1583 16.65 10.0833 16.6667 10 16.6667Z"
                    fill="#EFD22E"
                  />
                  <path
                    d="M9.99998 18.3917C9.89165 18.3917 9.78333 18.35 9.70833 18.2667C9.625 18.1917 9.58331 18.0833 9.58331 17.975C9.58331 17.8667 9.625 17.7583 9.70833 17.6833C9.85833 17.525 10.1416 17.525 10.2916 17.6833C10.375 17.7583 10.4166 17.8667 10.4166 17.975C10.4166 18.0833 10.375 18.1917 10.2916 18.2667C10.2166 18.35 10.1083 18.3917 9.99998 18.3917Z"
                    fill="#EFD22E"
                  />
                  <path
                    d="M2.91669 7.70834C2.58335 7.70834 2.26669 7.575 2.03336 7.34167C1.80002 7.10834 1.66669 6.79167 1.66669 6.45834C1.66669 6.13334 1.80002 5.80834 2.03336 5.57501C2.49169 5.10834 3.33335 5.10834 3.80002 5.57501C4.03335 5.80834 4.16669 6.13334 4.16669 6.45834C4.16669 6.79167 4.03335 7.10834 3.80002 7.34167C3.74168 7.4 3.67503 7.45 3.60837 7.5C3.5417 7.54167 3.46669 7.58334 3.39169 7.60834C3.31669 7.64167 3.24167 7.66667 3.15834 7.68334C3.08334 7.70001 3.00002 7.70834 2.91669 7.70834Z"
                    fill="#EFD22E"
                  />
                  <path
                    d="M17.0833 7.70834C16.7583 7.70834 16.4333 7.57501 16.2 7.34168C15.9666 7.10834 15.8333 6.78334 15.8333 6.45834C15.8333 6.37501 15.8417 6.29168 15.8583 6.21668C15.875 6.13335 15.9 6.05834 15.925 5.98334C15.9583 5.90834 16 5.83334 16.0416 5.76668C16.0916 5.70001 16.1416 5.63335 16.2 5.57501C16.2583 5.51668 16.325 5.46668 16.3916 5.41668C16.4583 5.37501 16.5333 5.33334 16.6083 5.30834C16.6833 5.27501 16.7583 5.25001 16.8417 5.23334C17 5.20001 17.1666 5.20001 17.325 5.23334C17.4083 5.25001 17.4833 5.27501 17.5583 5.30834C17.6333 5.33334 17.7083 5.37501 17.775 5.41668C17.8417 5.46668 17.9083 5.51668 17.9666 5.57501C18.025 5.63335 18.075 5.70001 18.125 5.76668C18.1666 5.83334 18.2083 5.90834 18.2333 5.98334C18.2667 6.05834 18.2916 6.13335 18.3083 6.21668C18.325 6.29168 18.3333 6.37501 18.3333 6.45834C18.3333 6.79168 18.2 7.10834 17.9666 7.34168C17.9083 7.40001 17.8417 7.45001 17.775 7.50001C17.7083 7.54168 17.6333 7.58334 17.5583 7.61668C17.4833 7.64168 17.4083 7.66668 17.325 7.68335C17.2416 7.70001 17.1666 7.70834 17.0833 7.70834Z"
                    fill="#EFD22E"
                  />
                  <path
                    d="M17.0833 10.625C17.0333 10.625 16.975 10.6166 16.925 10.6083C16.8667 10.6 16.8167 10.5833 16.7667 10.5583C16.7167 10.5416 16.6667 10.5167 16.6167 10.4833C16.575 10.4583 16.5333 10.4167 16.4916 10.3833C16.4583 10.3417 16.4167 10.3 16.3917 10.2583C16.3583 10.2083 16.3333 10.1583 16.3167 10.1083C16.2917 10.0583 16.275 10.0083 16.2667 9.95832C16.2583 9.89998 16.25 9.84998 16.25 9.79165C16.25 9.57498 16.3416 9.35831 16.4916 9.19998C16.5333 9.16665 16.575 9.13332 16.6167 9.09998C16.6667 9.06665 16.7167 9.04165 16.7667 9.02499C16.8167 8.99999 16.8667 8.98332 16.925 8.97499C17.025 8.94999 17.1333 8.94999 17.2417 8.97499C17.3 8.98332 17.35 8.99999 17.4 9.02499C17.45 9.04165 17.5 9.06665 17.5417 9.09998C17.5917 9.13332 17.6334 9.16665 17.675 9.19998C17.825 9.35831 17.9167 9.57498 17.9167 9.79165C17.9167 9.84998 17.9083 9.89998 17.9 9.95832C17.8917 10.0083 17.875 10.0583 17.85 10.1083C17.8333 10.1583 17.8083 10.2083 17.775 10.2583C17.7417 10.3 17.7084 10.3417 17.675 10.3833C17.6334 10.4167 17.5917 10.4583 17.5417 10.4833C17.5 10.5167 17.45 10.5416 17.4 10.5583C17.35 10.5833 17.3 10.6 17.2417 10.6083C17.1917 10.6166 17.1333 10.625 17.0833 10.625Z"
                    fill="#EFD22E"
                  />
                  <path
                    d="M2.91665 10.625C2.69998 10.625 2.48329 10.5333 2.32496 10.3833C2.17496 10.225 2.08331 10.0083 2.08331 9.79167C2.08331 9.575 2.17496 9.35833 2.32496 9.19999C2.55829 8.96666 2.92498 8.89167 3.23332 9.025C3.34165 9.06667 3.425 9.12499 3.50833 9.19999C3.65833 9.35833 3.74998 9.575 3.74998 9.79167C3.74998 10.0083 3.65833 10.225 3.50833 10.3833C3.35 10.5333 3.13331 10.625 2.91665 10.625Z"
                    fill="#EFD22E"
                  />
                  <path
                    d="M17.0833 12.9167C16.9166 12.9167 16.7583 12.85 16.6416 12.7333C16.525 12.6167 16.4583 12.4583 16.4583 12.2917C16.4583 12.2083 16.475 12.1334 16.5083 12.05C16.5416 11.975 16.5833 11.9083 16.6416 11.85C16.8166 11.675 17.0916 11.6167 17.325 11.7167C17.4 11.75 17.4667 11.7917 17.525 11.85C17.5833 11.9083 17.625 11.975 17.6583 12.05C17.6916 12.1334 17.7083 12.2083 17.7083 12.2917C17.7083 12.4583 17.6417 12.6167 17.525 12.7333C17.4667 12.7917 17.4 12.8333 17.325 12.8667C17.2416 12.9 17.1666 12.9167 17.0833 12.9167Z"
                    fill="#EFD22E"
                  />
                  <path
                    d="M2.91669 12.9167C2.75002 12.9167 2.59166 12.85 2.475 12.7333C2.41666 12.675 2.36668 12.6083 2.34168 12.5333C2.30835 12.4583 2.29169 12.375 2.29169 12.2917C2.29169 12.2083 2.30835 12.1333 2.34168 12.05C2.36668 11.975 2.41666 11.9083 2.475 11.85C2.7 11.6167 3.12504 11.6167 3.35838 11.85C3.41671 11.9083 3.45836 11.975 3.49169 12.05C3.52502 12.1333 3.54169 12.2083 3.54169 12.2917C3.54169 12.375 3.52502 12.4583 3.49169 12.5333C3.45836 12.6083 3.41671 12.675 3.35838 12.7333C3.24171 12.85 3.08335 12.9167 2.91669 12.9167Z"
                    fill="#EFD22E"
                  />
                  <path
                    d="M17.0834 15C17.025 15 16.975 14.9917 16.925 14.9667C16.875 14.95 16.825 14.9167 16.7917 14.875C16.7084 14.8 16.6667 14.6917 16.6667 14.5833C16.6667 14.475 16.7084 14.3667 16.7917 14.2917C16.9417 14.1333 17.225 14.1333 17.375 14.2917C17.4583 14.3667 17.5 14.475 17.5 14.5833C17.5 14.6917 17.4583 14.8 17.375 14.875C17.3 14.9583 17.1917 15 17.0834 15Z"
                    fill="#EFD22E"
                  />
                  <path
                    d="M2.91667 15C2.80833 15 2.70002 14.9583 2.62502 14.875C2.54169 14.8 2.5 14.6917 2.5 14.5833C2.5 14.475 2.54169 14.3667 2.62502 14.2917C2.77502 14.1333 3.05831 14.1333 3.20831 14.2917C3.29165 14.3667 3.33333 14.475 3.33333 14.5833C3.33333 14.6917 3.29165 14.8 3.20831 14.875C3.13331 14.9583 3.025 15 2.91667 15Z"
                    fill="#EFD22E"
                  />
                  <path
                    d="M6.45831 5.83334C6.37498 5.83334 6.29166 5.82501 6.21666 5.80834C6.13333 5.79167 6.05831 5.76667 5.98331 5.73334C5.89997 5.70834 5.8333 5.66667 5.76663 5.625C5.69163 5.575 5.63332 5.525 5.57498 5.46667C5.34165 5.23334 5.20831 4.90834 5.20831 4.58334C5.20831 4.25834 5.34165 3.93334 5.57498 3.70001C6.04165 3.23334 6.87498 3.23334 7.34164 3.70001C7.57498 3.93334 7.70831 4.25 7.70831 4.58334C7.70831 4.91667 7.57498 5.23334 7.34164 5.46667C7.28331 5.525 7.21666 5.575 7.14999 5.625C7.08333 5.66667 7.00832 5.70834 6.93332 5.73334C6.85832 5.76667 6.78329 5.79167 6.69996 5.80834C6.62496 5.82501 6.54165 5.83334 6.45831 5.83334Z"
                    fill="#EFD22E"
                  />
                  <path
                    d="M13.5417 5.83334C13.4584 5.83334 13.375 5.82501 13.3 5.80835C13.2167 5.79168 13.1417 5.76668 13.0667 5.73335C12.9917 5.70835 12.9167 5.66668 12.85 5.62501C12.7833 5.57501 12.7167 5.52501 12.6584 5.46668C12.6 5.40834 12.55 5.34168 12.5 5.27501C12.4584 5.20835 12.4167 5.13335 12.3833 5.05835C12.3583 4.98335 12.3334 4.90834 12.3167 4.82501C12.3 4.75001 12.2917 4.66668 12.2917 4.58334C12.2917 4.25834 12.425 3.93335 12.6584 3.70001C12.7167 3.64168 12.7833 3.59168 12.85 3.54168C12.9167 3.50001 12.9917 3.45834 13.0667 3.43334C13.1417 3.40001 13.2167 3.37501 13.3 3.35834C13.4584 3.32501 13.625 3.32501 13.7833 3.35834C13.8667 3.37501 13.9417 3.40001 14.0167 3.43334C14.0917 3.45834 14.1667 3.50001 14.2334 3.54168C14.3 3.59168 14.3667 3.64168 14.425 3.70001C14.6584 3.93335 14.7917 4.25834 14.7917 4.58334C14.7917 4.66668 14.7833 4.75001 14.7667 4.82501C14.75 4.90834 14.725 4.98335 14.7 5.05835C14.6667 5.13335 14.625 5.20835 14.5834 5.27501C14.5334 5.34168 14.4834 5.40834 14.425 5.46668C14.3667 5.52501 14.3 5.57501 14.2334 5.62501C14.1667 5.66668 14.0917 5.70835 14.0167 5.73335C13.9417 5.76668 13.8667 5.79168 13.7833 5.80835C13.7083 5.82501 13.625 5.83334 13.5417 5.83334Z"
                    fill="#EFD22E"
                  />
                  <path
                    d="M6.45831 9.37499C6.37498 9.37499 6.29166 9.36666 6.21666 9.35C6.13333 9.33333 6.05831 9.30833 5.98331 9.28333C5.90831 9.24999 5.8333 9.20833 5.76663 9.16666C5.69163 9.11666 5.63332 9.06666 5.57498 9.00833C5.34165 8.77499 5.20831 8.44999 5.20831 8.12499C5.20831 7.79166 5.34165 7.475 5.57498 7.24166C6.04165 6.775 6.87498 6.775 7.34164 7.24166C7.57498 7.475 7.70831 7.79166 7.70831 8.12499C7.70831 8.45833 7.57498 8.77499 7.34164 9.00833C7.10831 9.24166 6.78331 9.37499 6.45831 9.37499Z"
                    fill="#EFD22E"
                  />
                  <path
                    d="M13.5417 9.375C13.4584 9.375 13.375 9.36667 13.3 9.35C13.2167 9.33334 13.1417 9.30834 13.0667 9.27501C12.9917 9.25001 12.9167 9.20833 12.85 9.16667C12.7833 9.11667 12.7167 9.06667 12.6584 9.00833C12.6 8.95 12.55 8.88334 12.5 8.81667C12.4584 8.75 12.4167 8.67501 12.3833 8.60001C12.3583 8.52501 12.3334 8.45 12.3167 8.36666C12.3 8.29166 12.2917 8.20833 12.2917 8.125C12.2917 7.8 12.425 7.475 12.6584 7.24167C12.7167 7.18334 12.7833 7.13333 12.85 7.08333C12.9167 7.04167 12.9917 7 13.0667 6.975C13.1417 6.94166 13.2167 6.91667 13.3 6.9C13.4584 6.86667 13.625 6.86667 13.7833 6.9C13.8667 6.91667 13.9417 6.94166 14.0167 6.975C14.0917 7 14.1667 7.04167 14.2334 7.08333C14.3 7.13333 14.3667 7.18334 14.425 7.24167C14.6584 7.475 14.7917 7.8 14.7917 8.125C14.7917 8.20833 14.7833 8.29166 14.7667 8.36666C14.75 8.45 14.725 8.52501 14.7 8.60001C14.6667 8.67501 14.625 8.75 14.5834 8.81667C14.5334 8.88334 14.4834 8.95 14.425 9.00833C14.3667 9.06667 14.3 9.11667 14.2334 9.16667C14.1667 9.20833 14.0917 9.25001 14.0167 9.27501C13.9417 9.30834 13.8667 9.33334 13.7833 9.35C13.7083 9.36667 13.625 9.375 13.5417 9.375Z"
                    fill="#EFD22E"
                  />
                  <path
                    d="M6.45833 12.2917C6.35 12.2917 6.24166 12.2667 6.14166 12.225C6.03333 12.1833 5.94165 12.125 5.86665 12.05C5.79165 11.9667 5.73335 11.875 5.69168 11.775C5.65001 11.675 5.625 11.5667 5.625 11.4583C5.625 11.2417 5.71665 11.025 5.86665 10.8667C6.17498 10.5583 6.74168 10.5583 7.05002 10.8667C7.20002 11.025 7.29167 11.2417 7.29167 11.4583C7.29167 11.5667 7.26665 11.675 7.22499 11.775C7.18332 11.875 7.12502 11.9667 7.05002 12.05C6.89168 12.2 6.675 12.2917 6.45833 12.2917Z"
                    fill="#EFD22E"
                  />
                  <path
                    d="M13.5416 12.2917C13.325 12.2917 13.1083 12.2 12.95 12.05C12.8 11.8917 12.7083 11.675 12.7083 11.4583C12.7083 11.2417 12.8 11.025 12.95 10.8667C13.2583 10.5583 13.8167 10.5583 14.1333 10.8667C14.2833 11.025 14.375 11.2417 14.375 11.4583C14.375 11.5167 14.3666 11.5667 14.3583 11.625C14.35 11.675 14.3333 11.725 14.3083 11.775C14.2916 11.825 14.2667 11.875 14.2333 11.9167C14.2 11.9667 14.1667 12.0083 14.1333 12.05C13.975 12.2 13.7583 12.2917 13.5416 12.2917Z"
                    fill="#EFD22E"
                  />
                  <path
                    d="M6.45831 14.7917C6.29165 14.7917 6.13329 14.725 6.01662 14.6083C5.95829 14.55 5.91664 14.4833 5.88331 14.4083C5.84998 14.3333 5.83331 14.25 5.83331 14.1667C5.83331 14.0833 5.84998 14.0083 5.88331 13.925C5.91664 13.85 5.95829 13.7833 6.01662 13.725C6.07496 13.6667 6.14166 13.625 6.21666 13.5917C6.36666 13.525 6.54163 13.525 6.69996 13.5917C6.77496 13.625 6.84167 13.6667 6.9 13.725C7.01667 13.8417 7.08331 14 7.08331 14.1667C7.08331 14.25 7.06665 14.3333 7.03331 14.4083C6.99998 14.4833 6.95834 14.55 6.9 14.6083C6.78334 14.725 6.62498 14.7917 6.45831 14.7917Z"
                    fill="#EFD22E"
                  />
                  <path
                    d="M13.5417 14.7917C13.4584 14.7917 13.375 14.775 13.3 14.7417C13.225 14.7083 13.1583 14.6667 13.1 14.6083C13.0417 14.55 12.9917 14.4833 12.9667 14.4083C12.9334 14.3333 12.9167 14.25 12.9167 14.1667C12.9167 14.0833 12.9334 14 12.9667 13.925C13 13.85 13.0417 13.7833 13.1 13.725C13.1583 13.6667 13.225 13.625 13.3 13.5917C13.45 13.525 13.625 13.525 13.7833 13.5917C13.8583 13.625 13.925 13.6667 13.9834 13.725C14.0417 13.7833 14.0834 13.85 14.1167 13.925C14.15 14 14.1667 14.0833 14.1667 14.1667C14.1667 14.25 14.15 14.3333 14.1167 14.4083C14.0834 14.4833 14.0417 14.55 13.9834 14.6083C13.8667 14.725 13.7084 14.7917 13.5417 14.7917Z"
                    fill="#EFD22E"
                  />
                  <path
                    d="M6.45835 16.6667C6.35002 16.6667 6.24171 16.625 6.16671 16.5417C6.08337 16.4667 6.04169 16.3583 6.04169 16.25C6.04169 16.1417 6.08337 16.0333 6.16671 15.9583C6.31671 15.8 6.6 15.8 6.75 15.9583C6.83333 16.0333 6.87502 16.1417 6.87502 16.25C6.87502 16.3583 6.83333 16.4667 6.75 16.5417C6.675 16.625 6.56669 16.6667 6.45835 16.6667Z"
                    fill="#EFD22E"
                  />
                  <path
                    d="M13.5417 16.6667C13.4833 16.6667 13.4333 16.6583 13.3833 16.6333C13.3333 16.6167 13.2834 16.5833 13.25 16.5417C13.2084 16.5083 13.175 16.4583 13.1583 16.4083C13.1333 16.3583 13.125 16.3083 13.125 16.25C13.125 16.1417 13.1667 16.0333 13.25 15.9583C13.4 15.8 13.6833 15.8 13.8333 15.9583C13.9166 16.0333 13.9583 16.1417 13.9583 16.25C13.9583 16.3083 13.95 16.3583 13.925 16.4083C13.9084 16.4583 13.875 16.5083 13.8333 16.5417C13.7583 16.625 13.65 16.6667 13.5417 16.6667Z"
                    fill="#EFD22E"
                  />
                </svg>
                Collection
              </li>
              <li className="flex cursor-pointer items-center gap-1 text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M17.575 5.81667C16.8667 5.03334 15.6833 4.64167 13.9667 4.64167H13.7667V4.60834C13.7667 3.20834 13.7667 1.47501 10.6333 1.47501H9.36666C6.23332 1.47501 6.23332 3.21667 6.23332 4.60834V4.65001H6.03332C4.30832 4.65001 3.13332 5.04167 2.42499 5.82501C1.59999 6.74167 1.62499 7.97501 1.70832 8.81667L1.71666 8.87501L1.77745 9.51329C1.79171 9.66306 1.87246 9.79844 1.99846 9.88066C2.20051 10.0125 2.51025 10.2113 2.69999 10.3167C2.81666 10.3917 2.94166 10.4583 3.06666 10.525C4.49166 11.3083 6.05832 11.8333 7.64999 12.0917C7.72499 12.875 8.06666 13.7917 9.89166 13.7917C11.7167 13.7917 12.075 12.8833 12.1333 12.075C13.8333 11.8 15.475 11.2083 16.9583 10.3417C17.0083 10.3167 17.0417 10.2917 17.0833 10.2667C17.4035 10.0857 17.7354 9.864 18.04 9.64533C18.1532 9.56406 18.2254 9.43792 18.2408 9.29941L18.25 9.21667L18.2917 8.82501C18.3 8.77501 18.3 8.73334 18.3083 8.67501C18.375 7.83334 18.3583 6.68334 17.575 5.81667ZM10.9083 11.525C10.9083 12.4083 10.9083 12.5417 9.88332 12.5417C8.85832 12.5417 8.85832 12.3833 8.85832 11.5333V10.4833H10.9083V11.525ZM7.42499 4.64167V4.60834C7.42499 3.19167 7.42499 2.66667 9.36666 2.66667H10.6333C12.575 2.66667 12.575 3.20001 12.575 4.60834V4.65001H7.42499V4.64167Z"
                    fill="white"
                  />
                  <path
                    d="M17.2597 11.5091C17.6138 11.3418 18.021 11.6223 17.9856 12.0123L17.7 15.1583C17.525 16.825 16.8417 18.525 13.175 18.525H6.82501C3.15834 18.525 2.47501 16.825 2.30001 15.1667L2.0293 12.1888C1.99426 11.8034 2.39258 11.5233 2.74561 11.682C3.70482 12.1131 5.31682 12.8064 6.3528 13.0854C6.51681 13.1296 6.64996 13.2476 6.72436 13.4003C7.23857 14.4556 8.32775 15.0167 9.89168 15.0167C11.4402 15.0167 12.5427 14.434 13.0588 13.3755C13.1334 13.2227 13.2664 13.1048 13.4305 13.0604C14.5323 12.7619 16.2536 11.9846 17.2597 11.5091Z"
                    fill="white"
                  />
                </svg>
                Portfolio
              </li>
              <li className="flex cursor-pointer items-center gap-1 text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M14.2917 8.33332C14.7519 8.33332 15.125 7.96023 15.125 7.49999C15.125 7.03975 14.7519 6.66666 14.2917 6.66666C13.8314 6.66666 13.4583 7.03975 13.4583 7.49999C13.4583 7.96023 13.8314 8.33332 14.2917 8.33332Z"
                    fill="white"
                  />
                  <path
                    d="M14.2917 13.3333C14.7519 13.3333 15.125 12.9602 15.125 12.5C15.125 12.0398 14.7519 11.6667 14.2917 11.6667C13.8314 11.6667 13.4583 12.0398 13.4583 12.5C13.4583 12.9602 13.8314 13.3333 14.2917 13.3333Z"
                    fill="white"
                  />
                  <path
                    d="M16.4583 10.8333C16.9186 10.8333 17.2917 10.4602 17.2917 9.99999C17.2917 9.53975 16.9186 9.16666 16.4583 9.16666C15.9981 9.16666 15.625 9.53975 15.625 9.99999C15.625 10.4602 15.9981 10.8333 16.4583 10.8333Z"
                    fill="white"
                  />
                  <path
                    d="M5.66668 8.33332C6.12691 8.33332 6.50001 7.96023 6.50001 7.49999C6.50001 7.03975 6.12691 6.66666 5.66668 6.66666C5.20644 6.66666 4.83334 7.03975 4.83334 7.49999C4.83334 7.96023 5.20644 8.33332 5.66668 8.33332Z"
                    fill="white"
                  />
                  <path
                    d="M5.66668 13.3333C6.12691 13.3333 6.50001 12.9602 6.50001 12.5C6.50001 12.0398 6.12691 11.6667 5.66668 11.6667C5.20644 11.6667 4.83334 12.0398 4.83334 12.5C4.83334 12.9602 5.20644 13.3333 5.66668 13.3333Z"
                    fill="white"
                  />
                  <path
                    d="M3.50002 10.8333C3.96026 10.8333 4.33335 10.4602 4.33335 9.99999C4.33335 9.53975 3.96026 9.16666 3.50002 9.16666C3.03978 9.16666 2.66669 9.53975 2.66669 9.99999C2.66669 10.4602 3.03978 10.8333 3.50002 10.8333Z"
                    fill="white"
                  />
                  <path
                    d="M13.25 5.16667C13.7103 5.16667 14.0834 4.79357 14.0834 4.33333C14.0834 3.8731 13.7103 3.5 13.25 3.5C12.7898 3.5 12.4167 3.8731 12.4167 4.33333C12.4167 4.79357 12.7898 5.16667 13.25 5.16667Z"
                    fill="white"
                  />
                  <path
                    d="M6.75002 5.16667C7.21026 5.16667 7.58335 4.79357 7.58335 4.33333C7.58335 3.8731 7.21026 3.5 6.75002 3.5C6.28978 3.5 5.91669 3.8731 5.91669 4.33333C5.91669 4.79357 6.28978 5.16667 6.75002 5.16667Z"
                    fill="white"
                  />
                  <path
                    d="M10.0417 5.83332C10.5019 5.83332 10.875 5.46023 10.875 4.99999C10.875 4.53975 10.5019 4.16666 10.0417 4.16666C9.58144 4.16666 9.20834 4.53975 9.20834 4.99999C9.20834 5.46023 9.58144 5.83332 10.0417 5.83332Z"
                    fill="white"
                  />
                  <path
                    d="M13.25 16.6667C13.7103 16.6667 14.0834 16.2936 14.0834 15.8333C14.0834 15.3731 13.7103 15 13.25 15C12.7898 15 12.4167 15.3731 12.4167 15.8333C12.4167 16.2936 12.7898 16.6667 13.25 16.6667Z"
                    fill="white"
                  />
                  <path
                    d="M6.75002 16.6667C7.21026 16.6667 7.58335 16.2936 7.58335 15.8333C7.58335 15.3731 7.21026 15 6.75002 15C6.28978 15 5.91669 15.3731 5.91669 15.8333C5.91669 16.2936 6.28978 16.6667 6.75002 16.6667Z"
                    fill="white"
                  />
                  <path
                    d="M10.0417 16C10.5019 16 10.875 15.6269 10.875 15.1667C10.875 14.7064 10.5019 14.3333 10.0417 14.3333C9.58144 14.3333 9.20834 14.7064 9.20834 15.1667C9.20834 15.6269 9.58144 16 10.0417 16Z"
                    fill="white"
                  />
                  <path
                    d="M11.4583 8.54168C12.0336 8.54168 12.5 8.07531 12.5 7.50001C12.5 6.92471 12.0336 6.45834 11.4583 6.45834C10.883 6.45834 10.4167 6.92471 10.4167 7.50001C10.4167 8.07531 10.883 8.54168 11.4583 8.54168Z"
                    fill="white"
                  />
                  <path
                    d="M8.54167 8.54168C9.11696 8.54168 9.58333 8.07531 9.58333 7.50001C9.58333 6.92471 9.11696 6.45834 8.54167 6.45834C7.96637 6.45834 7.5 6.92471 7.5 7.50001C7.5 8.07531 7.96637 8.54168 8.54167 8.54168Z"
                    fill="white"
                  />
                  <path
                    d="M12.9167 11.0417C13.492 11.0417 13.9583 10.5753 13.9583 10C13.9583 9.42471 13.492 8.95834 12.9167 8.95834C12.3414 8.95834 11.875 9.42471 11.875 10C11.875 10.5753 12.3414 11.0417 12.9167 11.0417Z"
                    fill="white"
                  />
                  <path
                    d="M7.08332 11.0417C7.65862 11.0417 8.12499 10.5753 8.12499 10C8.12499 9.42471 7.65862 8.95834 7.08332 8.95834C6.50803 8.95834 6.04166 9.42471 6.04166 10C6.04166 10.5753 6.50803 11.0417 7.08332 11.0417Z"
                    fill="white"
                  />
                  <path
                    d="M8.54167 13.5417C9.11696 13.5417 9.58333 13.0753 9.58333 12.5C9.58333 11.9247 9.11696 11.4583 8.54167 11.4583C7.96637 11.4583 7.5 11.9247 7.5 12.5C7.5 13.0753 7.96637 13.5417 8.54167 13.5417Z"
                    fill="white"
                  />
                  <path
                    d="M11.4583 13.5417C12.0336 13.5417 12.5 13.0753 12.5 12.5C12.5 11.9247 12.0336 11.4583 11.4583 11.4583C10.883 11.4583 10.4167 11.9247 10.4167 12.5C10.4167 13.0753 10.883 13.5417 11.4583 13.5417Z"
                    fill="white"
                  />
                  <path
                    d="M10 2.77499C9.59167 2.77499 9.26666 2.44999 9.26666 2.04165C9.26666 1.63332 9.59167 1.30832 10 1.30832C10.4083 1.30832 10.7333 1.63332 10.7333 2.04165C10.7333 2.44999 10.4083 2.77499 10 2.77499Z"
                    fill="white"
                  />
                  <path
                    d="M14.375 3C14.025 3 13.7417 2.71667 13.7417 2.375C13.7417 2.03333 14.025 1.75 14.3667 1.75C14.7083 1.75 15 2.03333 15 2.375C15 2.71667 14.725 3 14.375 3Z"
                    fill="white"
                  />
                  <path
                    d="M5.625 3C5.28333 3 5 2.71667 5 2.375C5 2.03333 5.275 1.75 5.625 1.75H5.63334C5.97501 1.75 6.25834 2.03333 6.25834 2.375C6.25834 2.71667 5.975 3 5.625 3Z"
                    fill="white"
                  />
                  <path
                    d="M10 18.65C9.59167 18.65 9.26666 18.325 9.26666 17.9167C9.26666 17.5083 9.59167 17.1833 10 17.1833C10.4083 17.1833 10.7333 17.5083 10.7333 17.9167C10.7333 18.325 10.4083 18.65 10 18.65Z"
                    fill="white"
                  />
                  <path
                    d="M14.375 18.2083C14.025 18.2083 13.7417 17.925 13.7417 17.5833C13.7417 17.2417 14.025 16.9583 14.3667 16.9583C14.7083 16.9583 15 17.2417 15 17.5833C15 17.925 14.725 18.2083 14.375 18.2083Z"
                    fill="white"
                  />
                  <path
                    d="M5.625 18.2083C5.28333 18.2083 5 17.925 5 17.5833C5 17.2417 5.275 16.9583 5.625 16.9583H5.63334C5.97501 16.9583 6.25834 17.2417 6.25834 17.5833C6.25834 17.925 5.975 18.2083 5.625 18.2083Z"
                    fill="white"
                  />
                  <path
                    d="M1.29166 10.7333C0.891662 10.7333 0.55835 10.4083 0.55835 10.0083V10C0.55835 9.6 0.883328 9.26666 1.29166 9.26666C1.69999 9.26666 2.025 9.59166 2.025 10C2.025 10.4083 1.69166 10.7333 1.29166 10.7333Z"
                    fill="white"
                  />
                  <path
                    d="M3.125 14.7917C2.78333 14.7917 2.5 14.5167 2.5 14.1667V14.1583C2.5 13.8167 2.78333 13.5333 3.125 13.5333C3.46667 13.5333 3.75 13.8167 3.75 14.1583C3.75 14.5 3.46667 14.7917 3.125 14.7917Z"
                    fill="white"
                  />
                  <path
                    d="M3.125 6.46667C2.78333 6.46667 2.5 6.18334 2.5 5.84167C2.5 5.50001 2.78333 5.21667 3.125 5.21667C3.46667 5.21667 3.75 5.49167 3.75 5.83334V5.84167C3.75 6.18334 3.46667 6.46667 3.125 6.46667Z"
                    fill="white"
                  />
                  <path
                    d="M18.75 10.7333C18.35 10.7333 18.0167 10.4083 18.0167 10.0083V10C18.0167 9.6 18.3417 9.26666 18.75 9.26666C19.1583 9.26666 19.4833 9.59166 19.4833 10C19.4833 10.4083 19.15 10.7333 18.75 10.7333Z"
                    fill="white"
                  />
                  <path
                    d="M16.9167 14.7917C16.575 14.7917 16.2917 14.5167 16.2917 14.1667V14.1583C16.2917 13.8167 16.575 13.5333 16.9167 13.5333C17.2583 13.5333 17.5417 13.8167 17.5417 14.1583C17.5417 14.5 17.2583 14.7917 16.9167 14.7917Z"
                    fill="white"
                  />
                  <path
                    d="M16.9167 6.46667C16.575 6.46667 16.2917 6.18334 16.2917 5.84167C16.2917 5.50001 16.575 5.21667 16.9167 5.21667C17.2583 5.21667 17.5417 5.49167 17.5417 5.84167V5.85001C17.5417 6.18334 17.2583 6.46667 16.9167 6.46667Z"
                    fill="white"
                  />
                </svg>
                Points
              </li>
            </ul>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <div className="relative">
            <input
              onChange={(item: any) => setEventListener(item.target.value)}
              className="bg-black outline-none text-white px-6"
              type="text"
              value={EventListener}
              placeholder="Search by collection"
            />
            {EventListener == "" ? (
              <Image
                className="absolute top-[2px] left-0"
                src={search}
                width={20}
                height={20}
                alt="search"
              />
            ) : (
              <svg
                onClick={() => setEventListener("")}
                className="absolute cursor-pointer right-0 top-0"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2ZM9.6 16.2C9.6 17.19 8.79 18 7.8 18C6.81 18 6 17.19 6 16.2C6 15.21 6.81 14.4 7.8 14.4H8.6C9.15 14.4 9.6 14.85 9.6 15.4V16.2ZM9.6 8.6C9.6 9.15 9.15 9.6 8.6 9.6H7.8C6.81 9.6 6 8.79 6 7.8C6 6.81 6.81 6 7.8 6C8.79 6 9.6 6.81 9.6 7.8V8.6ZM14.15 13.25C14.15 13.74 13.75 14.15 13.25 14.15H10.74C10.25 14.15 9.84 13.75 9.84 13.25V10.74C9.84 10.25 10.24 9.84 10.74 9.84H13.25C13.74 9.84 14.15 10.24 14.15 10.74V13.25ZM16.2 18C15.21 18 14.4 17.19 14.4 16.2V15.4C14.4 14.85 14.85 14.4 15.4 14.4H16.2C17.19 14.4 18 15.21 18 16.2C18 17.19 17.19 18 16.2 18ZM16.2 9.6H15.4C14.85 9.6 14.4 9.15 14.4 8.6V7.8C14.4 6.81 15.21 6 16.2 6C17.19 6 18 6.81 18 7.8C18 8.79 17.19 9.6 16.2 9.6Z"
                  fill="gray"
                />
              </svg>
            )}
          </div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M19.34 14.49L18.34 12.83C18.13 12.46 17.94 11.76 17.94 11.35V8.82C17.94 6.47 16.56 4.44 14.57 3.49C14.05 2.57 13.09 2 11.99 2C10.9 2 9.92 2.59 9.4 3.52C7.45 4.49 6.1 6.5 6.1 8.82V11.35C6.1 11.76 5.91 12.46 5.7 12.82L4.69 14.49C4.29 15.16 4.2 15.9 4.45 16.58C4.69 17.25 5.26 17.77 6 18.02C7.94 18.68 9.98 19 12.02 19C14.06 19 16.1 18.68 18.04 18.03C18.74 17.8 19.28 17.27 19.54 16.58C19.8 15.89 19.73 15.13 19.34 14.49Z"
                fill="white"
              />
              <path
                d="M14.83 20.01C14.41 21.17 13.3 22 12 22C11.21 22 10.43 21.68 9.87999 21.11C9.55999 20.81 9.31999 20.41 9.17999 20C9.30999 20.02 9.43999 20.03 9.57999 20.05C9.80999 20.08 10.05 20.11 10.29 20.13C10.86 20.18 11.44 20.21 12.02 20.21C12.59 20.21 13.16 20.18 13.72 20.13C13.93 20.11 14.14 20.1 14.34 20.07C14.5 20.05 14.66 20.03 14.83 20.01Z"
                fill="white"
              />
            </svg>
          </div>
          {button && (
            <div>
              <Button className="flex gap-1" size="lg" variant="yellow">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                >
                  <path
                    d="M22.5 10.97V13.03C22.5 13.58 22.06 14.03 21.5 14.05H19.54C18.46 14.05 17.47 13.26 17.38 12.18C17.32 11.55 17.56 10.96 17.98 10.55C18.35 10.17 18.86 9.95001 19.42 9.95001H21.5C22.06 9.97001 22.5 10.42 22.5 10.97Z"
                    fill="black"
                  />
                  <path
                    d="M20.97 15.55H19.54C17.64 15.55 16.04 14.12 15.88 12.3C15.79 11.26 16.17 10.22 16.93 9.48C17.57 8.82 18.46 8.45 19.42 8.45H20.97C21.26 8.45 21.5 8.21 21.47 7.92C21.25 5.49 19.64 3.83 17.25 3.55C17.01 3.51 16.76 3.5 16.5 3.5H7.5C7.22 3.5 6.95 3.52 6.69 3.56C4.14 3.88 2.5 5.78 2.5 8.5V15.5C2.5 18.26 4.74 20.5 7.5 20.5H16.5C19.3 20.5 21.23 18.75 21.47 16.08C21.5 15.79 21.26 15.55 20.97 15.55ZM13.5 9.75H7.5C7.09 9.75 6.75 9.41 6.75 9C6.75 8.59 7.09 8.25 7.5 8.25H13.5C13.91 8.25 14.25 8.59 14.25 9C14.25 9.41 13.91 9.75 13.5 9.75Z"
                    fill="black"
                  />
                </svg>{" "}
                Connect Wallet
              </Button>
            </div>
          )}
          {/* ========== profile-coin-Information */}
          {profileInfo && (
            <div className="flex items-center gap-4">
              <div className="flex gap-1 items-center">
                <Image src={floor} alt="floor-img" />
                <p className="text-white">0.7856</p>
              </div>
              <div className="flex gap-1 items-center">
                <Image src={profile} alt="floor-img" width={20} />
                <p className="text-yellow-400">0x3aF945</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}