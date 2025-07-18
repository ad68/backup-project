"use client"

import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination"
import { Input } from "@/components/ui/input"
import { useState } from "react"

type PaginationControlsProps = {
    pageNumber: number
    pageSize: number
    totalItems: number
    onPageChange: (page: number) => void
    siblingCount?: number
}

export const PaginationControls = ({
    pageNumber,
    pageSize,
    totalItems,
    onPageChange,
    siblingCount = 1,
}: PaginationControlsProps) => {
    const totalPages = Math.ceil(totalItems / pageSize)
    const [goToPage, setGoToPage] = useState("")

    if (totalPages <= 1) return null

    const generatePageNumbers = () => {
        const totalVisible = siblingCount * 2 + 5
        if (totalPages <= totalVisible) {
            return [...Array(totalPages)].map((_, i) => i + 1)
        }

        const pages: (number | "...")[] = []
        const left = Math.max(2, pageNumber - siblingCount)
        const right = Math.min(totalPages - 1, pageNumber + siblingCount)

        pages.push(1)

        if (left > 2) {
            pages.push("...")
        }

        for (let i = left; i <= right; i++) {
            pages.push(i)
        }

        if (right < totalPages - 1) {
            pages.push("...")
        }

        pages.push(totalPages)

        return pages
    }

    const handleGoToPage = () => {
        const parsed = parseInt(goToPage, 10)
        if (!isNaN(parsed) && parsed >= 1 && parsed <= totalPages) {
            onPageChange(parsed)
            setGoToPage("")
        }
    }

    return (
        <div className="flex flex-col items-center gap-4">
            <Pagination>
                <PaginationContent>
                    <PaginationItem>
                        <PaginationPrevious
                            href="#"
                            onClick={(e) => {
                                e.preventDefault()
                                if (pageNumber > 1) onPageChange(pageNumber - 1)
                            }}
                        />
                    </PaginationItem>

                    {generatePageNumbers().map((item, idx) =>
                        item === "..." ? (
                            <PaginationItem key={idx}>
                                <span className="px-2 text-muted-foreground">...</span>
                            </PaginationItem>
                        ) : (
                            <PaginationItem key={item}>
                                <PaginationLink
                                    href="#"
                                    isActive={item === pageNumber}
                                    onClick={(e) => {
                                        e.preventDefault()
                                        onPageChange(Number(item))
                                    }}
                                >
                                    {item}
                                </PaginationLink>
                            </PaginationItem>
                        )
                    )}
                    <PaginationItem>
                        <PaginationNext
                            href="#"
                            onClick={(e) => {
                                e.preventDefault()
                                if (pageNumber < totalPages) onPageChange(pageNumber + 1)
                            }}
                        />
                    </PaginationItem>
                </PaginationContent>
            </Pagination>

            {/* Input برای رفتن به صفحه خاص */}
            <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground">برو به صفحه:</span>
                <Input
                    type="number"
                    min={1}
                    max={totalPages}
                    value={goToPage}
                    onChange={(e) => setGoToPage(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === "Enter") handleGoToPage()
                    }}
                    className="w-20 h-8 text-center text-sm"
                />
                <button
                    onClick={handleGoToPage}
                    className="text-sm px-3 py-1 bg-primary text-white rounded-md hover:bg-primary/90 transition"
                >
                    برو
                </button>
            </div>
        </div>
    )
}
